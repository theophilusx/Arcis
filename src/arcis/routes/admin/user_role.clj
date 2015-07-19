;;      Filename: user_role.clj
;; Creation Date: Sunday, 03 May 2015 12:45 PM AEST
;; Last Modified: Friday, 15 May 2015 11:32 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.user-role
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.users :as udb]))

(defn is-malformed-role [params]
  (let [validation-map (first (b/validate params
                                          :id v/required
                                          :role v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn update-role-by-id [{:keys [id role]}]
  (if-not (u/user-exists? id)
    {:post-status {:status :not-exist
                   :message "User with Id " id " not found"}}
    (let [rslt (udb/update-role! {:id id :user_role role})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Role for user Id " id " set to " role)}}
        {:post-status {:status :unknown
                       :message (str "Unexpected result changing role for Id "
                                     id " to " role)}}))))

(defresource set-user-role
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (if (nil? user)
                             (u/unauthenticated-msg :set-user-role)
                             (u/unauthorized-msg :set-user-role
                                                 "change user role"))))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-role params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (update-role-by-id params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
