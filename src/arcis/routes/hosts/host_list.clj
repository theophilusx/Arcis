;;      Filename: host_list.clj
;; Creation Date: Saturday, 01 August 2015 05:28 PM AEST
;; Last Modified: Thursday, 17 September 2015 05:44 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.hosts.host-list
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [arcis.db.hosts :as hdb]
            [arcis.utils :as u]))

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
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin" "View"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "host-list")))
  :handle-ok (fn [ctx]
               (generate-host-list)))
