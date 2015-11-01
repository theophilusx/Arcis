;;      Filename: hosts_utils.cljs
;; Creation Date: Saturday, 01 August 2015 04:41 PM AEST
;; Last Modified: Sunday, 01 November 2015 02:31 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.host-utils
  (:require [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.utils :as u]))

(def page-size 30)
(def index-size 15)

(defn keywordize-host-list
  "Convert a list of hosts maps and converts keys to keywords and
  generates a map of hosts indexed by host-id key"
  [host-list]
  (reduce (fn [m h]
            (let [host-id (:host_id h)]
              (assoc m (u/digit-keyword host-id)
                     {:display-action :summary
                      :host-id host-id
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

;; The hosts-index data structure consists of a hash of nested hashes where
;; each level represents a more specific grouping of hosts. The final level
;; is a vector of host IDs, representing an individual host as defined in
;; the :hosts :host-list var
;; Structure is
;; Network Group
;;   Subgroup
;;     Page Index (i.e. the list of pages displayed at top of paginated page
;;       Index/Page (i.e. the list of records for that page (vector)
(defn collect-ids
  "Builds a hash of hashes where the outer hash is the network group and
the inner hash is a hash of subgroups. Each subgroup value is a vector of
host IDs"
  [hosts]
  (reduce (fn [idx-hash k]
            (let [net (keyword (get-in hosts [k :network-group]))
                  grp (keyword (get-in hosts [k :subgroup-name]))]
              (update-in idx-hash [net grp] conj k)))
          (sorted-map) (keys hosts)))

(defn partition-ids
  "Takes the vector of host IDs in a subgroup and partitions them into a
hash where each key is an index number and the value is a vector of host IDs
with a maximum number <= size"
  [size id-list]
  (apply merge (sorted-map)
         (map-indexed
          (fn [i v]
            {(inc i) (vec v)})
          (partition-all size id-list))))


(defn pagify
  "Takes a vector of host IDs and first partitions the vector into a hash
where each key is an index number (starting at 1) and each value is a vector
of the host IDs such that the vector is <= index-size. Then takes this result
and gruops the indexes such that each group of indexes is <= page-size"
  [index-size page-size ids]
  (let [id-index (partition-ids index-size ids)]
    (if (< (count (keys id-index)) page-size)
      {1 id-index}
      (apply merge (sorted-map)
             (map-indexed
              (fn [pg ks]
                {(inc pg) (apply merge (map (fn [k]
                                              {k  (get id-index k)}) ks))})
              (partition-all page-size (keys id-index)))))))

(defn collect-group-pages
  "Processes each subgroup within a network group and partitions the host IIDs
associated with that group into pages of indexes. Each page has a maximum
number of indexes <= page-size and each index has a maximum number of host IDs
which is <= index-size"
  [index-size page-size subgroups]
  (apply merge  (map (fn [grp]
                       {grp (pagify index-size page-size (get subgroups grp))})
                     (keys subgroups))))

(defn build-host-index
  "First, collect all the host IDs associated with a network group and subgroup.
Then build an index broken into pages"
  [index-size page-size hosts]
  (let [hosts-summary (collect-ids hosts)]
    (apply merge (map (fn [net-name]
                        {net-name (collect-group-pages index-size page-size
                                   (get hosts-summary net-name))})
                      (keys hosts-summary)))))

(defn process-host-list
  "Callback used to process response from AJAX call to get host list"
  [response]
  (let [host-hash (keywordize-host-list response)
        host-idx (build-host-index 20 10 host-hash)]
    (state/set-value-in! [:hosts :host-list] host-hash)
    (state/set-value-in! [:hosts :host-index] host-idx)))

(defn get-host-list
  "Retrieve a list of hosts from the server"
  []
  (if (state/is-authenticated?)
    (ajax/get-it "get-host-list" "/hosts/list" #'process-host-list)
    (u/report-unauthenticated "get-host-lists")))

(defn get-display-action
  "Get the current display state for a host record"
  [host-key]
  (state/value-in [(state/this-page) :host-list host-key :display-action]))

(defn set-display-action
  "Set the display state for a host record"
  [host-id action]
  (state/set-value-in! [(state/this-page) :host-list
                        (u/digit-keyword host-id) :display-action] action))

