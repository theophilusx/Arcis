;;      Filename: services.clj
;; Creation Date: Saturday, 14 March 2015 07:29 AM AEDT
;; Last Modified: Thursday, 17 September 2015 05:42 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.register
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.users :as udb]))

(defn is-malformed-user? [params]
  (let [vmap (first (b/validate params
                                :first-name v/required
                                :last-name v/required
                                :email v/email
                                :pass [v/required [v/min-count 8]]))]
    (if (nil? vmap)
      false
      {:validation-errors vmap})))

(defn user-exists? [email]
  (if (< 0 (count (udb/get-user-by-email {:email email})))
    true
    false))

(defn create-user [{:keys [first-name last-name email pass]}]
  (if (user-exists? email)
    {:post-status {:status :duplicate
                   :message (str "A user with the email " email
                                 " already exists")}}
    (let [rslt (udb/create-user! {:first_name first-name
                                  :last_name last-name
                                  :email email
                                  :user_role "View"
                                  :is_active false
                                  :pass (u/encrypt pass)})]
      (if (= 1 rslt)
        {:post-status {:status :success
                       :message (str "Created new user " email)}}
        {:post-status {:status :unknown
                       :message (str "Unexpected result creating user " email
                                     " Status: " rslt)}}))))

(defresource register-user
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "register-user")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-user? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (create-user params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
