;;      Filename: users.clj
;; Creation Date: Sunday, 05 July 2015 02:34 PM AEST
;; Last Modified: Monday, 06 July 2015 08:01 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.users
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [arcis.db.users :as udb]
            [arcis.utils :as u]))

(defn generate-user-list []
  (let [users (udb/get-all-users)]
    (generate-string users)))

(defresource user-list
  :allowed-methods [:get]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (if (nil? user)
                             (u/unauthenticated-msg :user-list)
                             (u/unauthorized-msg :user-list
                                                 "request a user list"))))
  :handle-ok (fn [ctx]
               (generate-user-list)))


