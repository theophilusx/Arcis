;;      Filename: hosts_ajax.cljs
;; Creation Date: Saturday, 01 August 2015 04:41 PM AEST
;; Last Modified: Sunday, 20 September 2015 02:25 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.hosts-ajax
  (:require [arcis.state :as state]
            [ajax.core :refer [GET]]
            [arcis.utils :as u]))

(defn keywordize-host-list
  "Convert a list of hosts maps and converts keys to keywords and 
  generates a map of hosts indexed by host-id key"
  [host-list]
  (reduce (fn [m h]
            (let [host-id (:host_id h)]
              (assoc m (u/digit-keyword host-id)
                     {:host-id host-id
                      :visible "hidden"
                      :mac (:mac h)
                      :ipv4 (:ipv4 h)
                      :ipv6 (:ipv6 h)
                      :hostname (:hostname h)
                      :os (:os h)
                      :dhcp (:dhcp h)
                      :dns (:dns h)
                      :reverse-dns (:reverse_dns h)
                      :host-type (:host_type h)
                      :network-group (:network_group h)
                      :subgroup-name (:subgroup_name h)
                      :management-group (:management_group h)
                      :status (:status h)
                      :created-dt (:created_dt h)
                      :last-modified-dt (:last_modified_dt h)
                      :last-seen-dt (:last_seen_dt h)})))
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
  (let [host-hash (keywordize-host-list response)
        host-idx (build-network-index host-hash)]
    (state/set-value-in! [(state/this-page) :host-list] host-hash)
    (state/set-value-in! [(state/this-page) :host-index] host-idx)))

(defn get-host-list
  "Return a list of all known hosts"
  []
  (when (state/is-authenticated?)
    (let [token (state/value-in [:user-data :token])]
      (GET "/hosts/list" {:format :json
                          :response-format :json
                          :keywords? true
                          :handler host-list-resp
                          :headers {"Authorization" (str "Token " token)}
                          :error-handler (u/default-error-response
                                           "get-host-list")}))))
