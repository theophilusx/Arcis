;;      Filename: users.clj
;; Creation Date: Sunday, 05 July 2015 02:34 PM AEST
;; Last Modified: Thursday, 17 September 2015 05:15 PM AEST
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
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "user-list")))
  :handle-ok (fn [ctx]
               (generate-user-list)))


