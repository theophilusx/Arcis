;;      Filename: host_list.clj
;; Creation Date: Saturday, 01 August 2015 05:28 PM AEST
;; Last Modified: Sunday, 02 August 2015 12:23 PM AEST
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
         :created_dt (u/format-date-str (:created_dt host))
         :last_modified_dt (u/format-date-str (:last_modified_dt host))
         :last_seen_dt (u/format-date-str (:last_seen_dt host))))

(defn generate-host-list []
  (let [hosts (map format-dates (hdb/get-all-hosts))]
    (generate-string hosts)))

(defresource host-list
  :allowed-methods [:get]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin :View} role)))
  :handle-unauthorized (fn [ctx]
                         (if-let [id (get-in ctx [:request :session :identity])]
                           (u/unauthorized-msg :host-list "request a host list")
                           (u/unauthenticated-msg :host-list)))
  :handle-ok (fn [ctx]
               (generate-host-list)))
