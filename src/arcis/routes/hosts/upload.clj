;;      Filename: upload.clj
;; Creation Date: Friday, 24 July 2015 12:49 PM AEST
;; Last Modified: Thursday, 17 September 2015 05:44 PM AEST
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
            [arcis.routes.hosts.network-groups :refer [make-classifier]])
  (:import [java.sql BatchUpdateException]))

(defn y-or-n-check [v]
  (cond
    (or (= "y" v) (= "Y" v)) "Y"
    (or (= "n" v) (= "N" v)) "N"
    :else "N"))

(defn record-id [r]
  (:host_id (first (hdb/get-host r))))

(defn parse-mdf-record [l]
  (let [[_ mac ip host domain dhcp dns rdns _ _] (s/split l #":")]
    {:mac (u/convert-mac mac)
     :ipv4 ip
     :ipv6 "0000:0000:0000:0000:0000:0000:0000:0000"
     :hostname (s/lower-case (str host "." domain))
     :dhcp (y-or-n-check dhcp)
     :dns (y-or-n-check dns)
     :reverse_dns (y-or-n-check rdns)
     :created_dt (java.util.Date.)
     :last_seen_dt (java.util.Date.)}))

(defn update-host-record [s host-id]
  (try
    (hdb/update-last-seen-date! {:last_seen_dt (java.util.Date.)
                                 :host_id host-id})
    (assoc s :updates (inc (:updates s)))
    (catch BatchUpdateException e1
      (let [e2 (.getNextException e1)]
        (println (str "MDF update exception: " (.getMessage e2) "\n\t"
                      "Host record ID: " host-id))
        (assoc s :sql-errors (inc (:sql-errors s)))))
    (catch Exception e3
      (println (str "MDF update exception: " (.getMessage e3) "\n\t"
                    "Host record ID: " host-id))
      (assoc s :errors (inc (:errors s))))))

(defn insert-host-record [s r]
  (try
    (hdb/insert-mdf-record! r)
    (assoc s :inserts (inc (:inserts s)))
    (catch BatchUpdateException e1
      (let [e2 (.getNextException e1)]
        (println (str "MDF insert exception: " (.getMessage e2) "\n\t"
                      "MDF Record: " r))
        (assoc s :sql-errors (inc (:sql-errors s)))))
    (catch Exception e3
      (println (str "MDF insert exception: " (.getMessage e3) "\n\t"
                    "MDF Record: " r))
      (assoc s :errors (inc (:errors s))))))

(defn process-mdf-record [state r]
  (let [host-id (record-id r)]
    (if host-id
      (update-host-record state host-id)
      (insert-host-record state r))))

(defn parse-mdf-file [f]
  (with-open [r (clojure.java.io/reader f)]
    (let [lines (line-seq r)
          rcds (map parse-mdf-record lines)
          classifier (make-classifier)
          mdf-records (map classifier rcds)
          rslt (reduce process-mdf-record
                       {:inserts 0 :updates 0 :errors 0 :sql-errors 0}
                       mdf-records)]
      rslt)))

(defn insert-mdf-records [{:keys [upload-file] :as p}]
  (let [rslt (parse-mdf-file (:tempfile upload-file))]
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
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "upload-hosts")))
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
