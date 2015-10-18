;;      Filename: delete_user.clj
;; Creation Date: Sunday, 10 May 2015 10:39 AM AEST
;; Last Modified: Sunday, 18 October 2015 05:57 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.delete-user
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.users :as udb]))

(defn is-malformed-delete [params]
  (let [validation-map (first (b/validate params :id v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn delete-user-by-id [{:keys [id]}]
  (if-not (udb/user-exists? id)
    {:post-status {:status :not-exist
                   :message "User with Id " id " not found"}}
    (let [rslt (udb/delete-user! {:id id})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "User with Id " id " deleted")}}
        {:post-status {:status :unknown
                       :message (str "Unexpected result deleting user with Id "
                                     id ". Result: " rslt)}}))))

(defresource delete-user
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "delete-user")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-delete params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (delete-user-by-id params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
