;;      Filename: network-groups.clj
;; Creation Date: Friday, 04 September 2015 01:14 PM AEST
;; Last Modified: Saturday, 31 October 2015 10:27 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.hosts.network-groups
  (:require [arcis.db.network :as ndb]))

(defn get-network-groups []
  (let [grp (ndb/get-active-network-groups)]
    (reduce (fn [m v]
              (assoc m (keyword (str (:group_name v) "|" (:subgroup_name v)))
                     (re-pattern (:group_regexp v))))
            {} grp)))

(defn make-unknown [ip]
  (let [[match sub-match] (re-matches #"(\d+\.\d+\.\d+)\.\d+" ip)]
    (if match
      ["Unknown" (str (clojure.string/replace sub-match #"\." "-") "-X")]
      ["Unknown" "Unknown"])))

(defn make-classifier []
  (let [patterns (get-network-groups)]
    (fn [mdf-record]
      (try
        (let [match-key (some (fn [rx]
                                (if (re-matches (rx patterns)
                                                (:ipv4 mdf-record))
                                  rx)) (keys patterns))
              [net grp] (if match-key
                          (clojure.string/split (name match-key) #"\|")
                          (make-unknown (:ipv4 mdf-record)))]
          (assoc mdf-record
                 :network_group net
                 :subgroup_name grp))
        (catch Exception e
          (println (str "Classifier exception: " (.getMessage e) "\n\t"
                        "MDF Record: " mdf-record))
          (assoc mdf-record
                 :network_group "Unknwon2"
                 :subgroup_name "Unknown2"))))))
