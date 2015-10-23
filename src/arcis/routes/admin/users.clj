;;      Filename: users.clj
;; Creation Date: Sunday, 05 July 2015 02:34 PM AEST
;; Last Modified: Sunday, 18 October 2015 06:00 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.admin.users
  (:require [arcis.db.users :as udb]
            [arcis.utils :as u]
            [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]))

(defn generate-user-list []
  (let [users (map #(assoc % :last_login (u/date-to-str (:last_login %)))
                   (udb/get-all-users))]
    (generate-string users)))

(defresource user-list
  :allowed-methods [:get]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "user-list")))
  :handle-ok (fn [ctx]
               (generate-user-list)))


