;;      Filename: services.clj
;; Creation Date: Saturday, 14 March 2015 07:29 AM AEDT
;; Last Modified: Friday, 10 July 2015 03:03 PM AEST
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
  (println (str "is-malformed-user?: " params))
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
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (if (nil? user)
                             (u/unauthenticated-msg :register-user)
                             (u/unauthorized-msg :register-user
                                                 "register users"))))
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
