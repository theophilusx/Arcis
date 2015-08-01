;;      Filename: utils.clj
;; Creation Date: Sunday, 05 July 2015 02:36 PM AEST
;; Last Modified: Saturday, 01 August 2015 04:03 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.utils
  (:require [buddy.hashers :as hashers]
            [cheshire.core :refer [generate-string]]
            [arcis.db.users :as udb]
            [clojure.string :as s]
            [clj-time.core :as t]
            [clj-time.coerce :as tc]
            [clj-time.format :as tf]))

(defn encrypt [pwd]
  (hashers/encrypt pwd {:algorithm :pbkdf2+sha256}))

(defn handle-malformed-json-request [validation-map]
  (let [ks (keys validation-map)]
    (generate-string
     {:message (str "Malformed data submitted: "
                    (reduce (fn [s k]
                              (str s " "
                                   (first (get validation-map k))))
                            "" ks))})))

(defn is-authorized? [allowed-roles role]
  (if (contains? allowed-roles role)
    true
    false))

(defn unauthenticated-msg [fname]
  (println (str fname ": user is not authenticated"))
  (generate-string {:status :not-authenticated
                    :message "User is not authenticated"}))

(defn unauthorized-msg [fname msg]
  (let [prefix "You are not authorised to "
        suffix ". This attempt has been logged."]
    (println (str fname " " prefix msg suffix))
    (generate-string {:status :not-authorised
                      :message (str prefix msg suffix)})))

(defn user-exists? [id]
  (if (= 1 (count (udb/get-user-by-id {:id id})))
    true
    false))

(defn java-date-to-local-str [dt]
  (tf/unparse
   (tf/formatter-local "d-MMM-yyyy @ hh:mm a")
   (t/to-time-zone (tc/from-date dt) (t/default-time-zone))))

(def mac-re
  "Regular expression used to match mac addresses from master data file"
  #"^[0-9a-f]+\:[0-9a-f]+\:[0-9a-f]+\:[0-9a-f]+\:[0-9a-f]+\:[0-9a-f]+$")


(defn convert-mac
  "Convert a MAC address from aabb.ccdd.eeff format to aa:bb:cc:dd:ee:ff"
  [m]
  (let [m-str  (if m
                 (s/lower-case m)
                 "")]
    (cond (empty? m-str) ":::::"
          (re-seq mac-re m-str) m-str
          (re-seq #"^[0-9a-f]+\.[0-9a-f]+\.[0-9a-f]+$" m-str)
          (apply str (flatten
                      (interpose
                       \: (partition 2 (s/replace m-str #"\." "")))))
          :else ":::::")))
