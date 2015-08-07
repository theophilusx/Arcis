;;      Filename: users.clj
;; Creation Date: Sunday, 05 July 2015 02:34 PM AEST
;; Last Modified: Friday, 07 August 2015 04:20 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.users
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [arcis.db.users :as udb]
            [arcis.utils :as u]))

(defn generate-user-list []
  (let [users (map #(assoc % :last_login (u/date-to-str (:last_login %)))
                   (udb/get-all-users))]
    (generate-string users)))

(defresource user-list
  :allowed-methods [:get]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (if-let [id (get-in ctx [:request :session :identity])]
                           (u/unauthorized-msg :user-list
                                               "request a user list")
                           (u/unauthenticated-msg :user-list)))
  :handle-ok (fn [ctx]
               (generate-user-list)))


