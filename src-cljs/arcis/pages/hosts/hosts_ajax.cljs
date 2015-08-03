;;      Filename: hosts_ajax.cljs
;; Creation Date: Saturday, 01 August 2015 04:41 PM AEST
;; Last Modified: Monday, 03 August 2015 06:18 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.hosts-ajax
  (:require [reagent.session :as session]
            [ajax.core :refer [GET]]
            [arcis.utils :as u]))

(defn keywordize-host-list
  "Convert a list of hosts maps and converts keys to keywords and 
  generates a map of hosts indexed by host-id key"
  [host-list]
  (reduce (fn [m h]
            (let [host-id (get h "host_id")]
              (assoc m (u/digit-keyword host-id)
                     {:host-id host-id
                      :visible "hidden"
                      :mac (get h "mac")
                      :ipv4 (get h "ipv4")
                      :ipv6 (get h "ipv6")
                      :hostname (get h "hostname")
                      :os (get h "os")
                      :host-type (get h "host_type")
                      :network-group (get h "network_group")
                      :management-group (get h "management_group")
                      :status (get h "status")
                      :created-dt (get h "created_dt")
                      :last-modified-dt (get h "last_modified_dt")
                      :last-seen-dt (get h "last_seen_dt")})))
          {}  host-list))

(defn make-index-entry [ip]
  (keyword (re-find #"^\d+\.\d+\.\d+" ip)))

(defn build-network-index [hosts]
  (reduce (fn [idx-hash k]
            (let [idx (make-index-entry (get-in hosts [k :ipv4]))]
              (if (contains? idx-hash idx)
                (assoc idx-hash idx (conj (idx idx-hash) k))
                (assoc idx-hash idx [k]))))
          (sorted-map) (keys hosts)))

(defn host-list-resp
  "Callback used to process response from AJAX call to get host list"
  [response]
  (let [host-list (js->clj response :keywordize-keys true)
        host-hash (keywordize-host-list host-list)
        host-idx (build-network-index host-hash)]
    (session/assoc-in! [(session/get :page) :host-list] host-hash)
    (session/assoc-in! [(session/get :page) :host-index] host-idx)))

(defn host-list-error-resp
  "Callback used to process AJAX call errors retrieving host list"
  [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Error: " (:status ctx) " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "host-list-error-resp: AJAX Error: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn get-host-list
  "Return a list of all known hosts"
  []
  (GET "/hosts/list" {:format :json
                      :handler host-list-resp
                      :error-handler host-list-error-resp}))
