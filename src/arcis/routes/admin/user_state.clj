;;      Filename: user_state.clj
;; Creation Date: Thursday, 30 April 2015 08:20 PM AEST
;; Last Modified: Saturday, 18 July 2015 07:44 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.user-state
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.users :as udb]))


(defn is-malformed-state [params]
  (let [validation-map (first (b/validate params
                                          :id v/required
                                          :active-state v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn update-state-by-id [{:keys [id active-state]}]
  (if-not (u/user-exists? id)
    {:post-status {:status :not-exist
                   :message "User with Id " id " not found"}}
    (let [rslt (udb/update-state! {:id id :state active-state})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Active state for Id " id
                                     " set to " (if active-state "Yes" "No"))}}
        {:post-status {:status :unknwon
                       :message (str "Unexpected result changing state for Id "
                                     id " to state " active-state)}}))))
(defresource set-user-state
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (println (str "handle-unauthorized: user: " user))
                           (if (nil? user)
                             (u/unauthenticated-msg :set-user-state)
                             (u/unauthorized-msg :set-user-state
                                                 "change user state"))))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-state params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (update-state-by-id params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
