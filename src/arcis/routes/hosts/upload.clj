;;      Filename: upload.clj
;; Creation Date: Friday, 24 July 2015 12:49 PM AEST
;; Last Modified: Saturday, 08 August 2015 09:40 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.hosts.upload
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [clojure.string :as s]
            [arcis.utils :as u]
            [arcis.db.hosts :as hdb]
            [arcis.local-site.addresses :refer [get-network-group]])
  (:import [java.sql BatchUpdateException]))

(defn y-or-n-check [v]
  (cond
    (or (= "y" v) (= "Y" v)) "Y"
    (or (= "n" v) (= "N" v)) "N"
    :else "N"))

(defn mk-mdf-record [v]
  (let [[_ mac ip host domain dhcp dns rdns _ tstamp] (s/split v #":")]
    {:mac (u/convert-mac mac)
     :ipv4 ip
     :ipv6 "0000:0000:0000:0000:0000:0000:0000:0000"
     :hostname (s/lower-case (str host "." domain))
     :network_group (get-network-group ip)
     :dhcp (y-or-n-check dhcp)
     :dns (y-or-n-check dns)
     :reverse_dns (y-or-n-check rdns)
     :created_dt (u/parse-mdf-date tstamp)
     :last_seen_dt (java.util.Date.)}))

(defn record-id [r]
  (:host_id (first (hdb/get-host r))))

(defn insert-record [l]
  (let [r (mk-mdf-record l)
        host-id (record-id r)]
    (if host-id
      (hdb/update-last-seen-date! {:last_seen_dt (java.util.Date.)
                                   :host_id host-id})
      (hdb/insert-mdf-record! r))))

(defn process-mdf-record [state l]
  (try
    (insert-record l)
    (assoc state :inserts (inc (:inserts state)))
    (catch BatchUpdateException e1
      (let [e2 (.getNextException e1)]
        (println (str "MDF insert exception1: " (.getMessage e2) "\n\t"
                      "MDF Line: " l))
        (assoc state :sql-errors (inc (:sql-errors state)))))
    (catch Exception e3
      (println (str "MDF insert exception2: " (.getMessage e3) "\n\t"
                    "MDF Line: " l))
      (assoc state :errors (inc (:errors state))))))

(defn parse-mdf [f]
  (with-open [r (clojure.java.io/reader f)]
    (let [lines (line-seq r)
          rslt (reduce process-mdf-record
                       {:inserts 0 :errors 0 :sql-errors 0} lines)]
      rslt)))

(defn insert-mdf-records [{:keys [upload-file] :as p}]
  (let [rslt (parse-mdf (:tempfile upload-file))]
    {:post-status {:status :success
                   :message (str "Processed " rslt)}}))

(defn is-malformed-upload? [params]
  (let [upload-file (if (map? (get params :upload-file))
                      (get params :upload-file)
                      {})]
    
    (let [vmap (first (b/validate upload-file
                                  :filename v/required
                                  :size v/required
                                  :tempfile v/required))]
      (if (nil? vmap)
        false
        {:validation-errors vmap}))))

(defresource upload-hosts
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (if (nil? user)
                             (u/unauthenticated-msg :upload-hosts)
                             (u/unauthorized-msg :upload-hosts
                                                 "upload hosts"))))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-upload? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (insert-mdf-records params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
