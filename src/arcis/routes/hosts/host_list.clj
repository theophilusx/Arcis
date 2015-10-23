;;      Filename: host_list.clj
;; Creation Date: Saturday, 01 August 2015 05:28 PM AEST
;; Last Modified: Sunday, 18 October 2015 05:55 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.hosts.host-list
  (:require [arcis.db.hosts :as hdb]
            [arcis.utils :as u]
            [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]))

(defn format-dates [host]
  (assoc host
         :created_dt (u/date-to-str (:created_dt host))
         :last_modified_dt (u/date-to-str (:last_modified_dt host))
         :last_seen_dt (u/date-to-str (:last_seen_dt host))))

(defn generate-host-list []
  (let [hosts (map format-dates (hdb/get-all-hosts))]
    (generate-string hosts)))

(defresource host-list
  :allowed-methods [:get]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin" "View"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "host-list")))
  :handle-ok (fn [ctx]
               (generate-host-list)))
