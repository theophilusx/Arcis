;;      Filename: services.clj
;; Creation Date: Saturday, 14 March 2015 07:29 AM AEDT
;; Last Modified: Friday, 23 October 2015 10:53 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.admin.register
  (:require [arcis.db.users :as udb]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]))

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
  (if (pos? (count (udb/get-user-by-email {:email email})))
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
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "register-user")))
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
