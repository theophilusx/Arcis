;;      Filename: password.clj
;; Creation Date: Wednesday, 29 April 2015 05:30 PM AEST
;; Last Modified: Sunday, 19 July 2015 10:14 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.password
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.users :as udb]))

(defn malformed-pwd-data? [params]
  (let [validation-map (first (b/validate
                               params
                               :id [v/required [v/number]]
                               :password [v/required [v/min-count 8]]))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn update-password-by-id [{:keys [id password]}]
  (let [pass (u/encrypt password)]
    (if (= 1 (count (udb/get-user-by-id {:id id})))
      (let [rslt (udb/update-password! {:id id :pass pass})]
        (if (= 1 rslt)
          {:post-status {:status :success
                         :message (str "Id " id " password changed")}}
          {:post-status {:status :unknown
                         :message (str "Unexpected result changing password "
                                       "for Id " id " Status: rslt")}}))
      {:post-status {:status :not-exist
                     :message (str "User with Id " id " not found!")}})))

(defresource change-password
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (if (nil? user)
                             (u/unauthenticated-msg :admin-change-password)
                             (u/unauthorized-msg :admin-change-password
                                                 "change user passwords"))))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (malformed-pwd-data? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (update-password-by-id params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
