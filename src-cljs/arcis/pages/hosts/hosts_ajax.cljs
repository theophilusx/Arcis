;;      Filename: hosts_ajax.cljs
;; Creation Date: Saturday, 01 August 2015 04:41 PM AEST
;; Last Modified: Thursday, 17 September 2015 05:51 PM AEST
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
                      :dhcp (get h "dhcp")
                      :dns (get h "dns")
                      :reverse-dns (get h "reverse_dns")
                      :host-type (get h "host_type")
                      :network-group (get h "network_group")
                      :subgroup-name (get h "subgroup_name")
                      :management-group (get h "management_group")
                      :status (get h "status")
                      :created-dt (get h "created_dt")
                      :last-modified-dt (get h "last_modified_dt")
                      :last-seen-dt (get h "last_seen_dt")})))
          {}  host-list))

(defn build-network-index [hosts]
  (reduce (fn [idx-hash k]
            (let [net (keyword (get-in hosts [k :network-group]))
                  grp (keyword (get-in hosts [k :subgroup-name]))]
              (update-in idx-hash [net grp] conj k)))
          (sorted-map) (keys hosts)))

(defn host-list-resp
  "Callback used to process response from AJAX call to get host list"
  [response]
  (let [host-list (js->clj response :keywordize-keys true)
        host-hash (keywordize-host-list host-list)
        host-idx (build-network-index host-hash)]
    (session/assoc-in! [(u/this-page) :host-list] host-hash)
    (session/assoc-in! [(u/this-page) :host-index] host-idx)))

(defn get-host-list
  "Return a list of all known hosts"
  []
  (when-let [token (session/get-in [:user-data :token])]
    (GET "/hosts/list" {:format :json
                        :handler host-list-resp
                        :headers {"Authorization" (str "Token " token)}
                        :error-handler (u/default-error-response
                                         "get-host-list")})))
