;;      Filename: network-groups.clj
;; Creation Date: Friday, 04 September 2015 01:14 PM AEST
;; Last Modified: Friday, 04 September 2015 05:42 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.hosts.network-groups
  (:require [arcis.utils :as u]
            [arcis.db.network :as ndb]))

(defn get-network-groups []
  (let [grp (ndb/get-active-network-groups)]
    (reduce (fn [m v]
              (assoc m (keyword (str (:group_name v) "|" (:subgroup_name v)))
                     (re-pattern (:group_regexp v))))
            {} grp)))

(defn make-classifier []
  (let [patterns (get-network-groups)]
    (fn [ip]
      (let [match-key (some (fn [rx]
                              (if (re-matches (rx patterns) ip)
                                rx)) (keys patterns))]
        (if match-key
          (clojure.string/split (name match-key) #"\|")
          ["Unknown" "Unknown"])))))



