;;      Filename: utils.clj
;; Creation Date: Sunday, 05 July 2015 02:36 PM AEST
;; Last Modified: Friday, 23 October 2015 04:17 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.utils
  (:require [buddy.hashers :as hashers]
            [cheshire.core :refer [generate-string]]
            [clj-time.coerce :as tc]
            [clj-time.core :as t]
            [clj-time.format :as tf]
            [clojure.string :as s]))

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

;; (defn is-authorized? [allowed-roles role]
;;   (if (contains? allowed-roles role)
;;     true
;;     false))

(defn is-authorized? [id roles]
  (if (and id
           (contains? roles (:user_role id)))
    true
    false))

(defn unauthenticated-msg [service]
  (println (str service ": unauthenticated user tried to access " service))
  (generate-string {:status-text "not-authenticated"
                    :message "User is not authenticated"}))

(defn unauthorized-msg [id service]
  (let [msg (str "You are not authorized to access " service " service")]
    (println (str service " " (:email id) " tried to access " service))
    (generate-string {:status-text "not-authorised"
                      :message msg})))

(defn handle-unauthorized [id service]
  (if-not id
    (unauthenticated-msg service)
    (unauthorized-msg id service)))

(defn java-date-to-local-str [dt]
  (tf/unparse
   (tf/formatter-local "d-MMM-yyyy @ hh:mm a")
   (t/to-time-zone (tc/from-date dt) (t/default-time-zone))))

(defn date-to-str [dt]
  (if (instance? java.util.Date dt)
    (java-date-to-local-str dt)
    "Unknown"))

(defn str-to-java-date [fmt s]
  (tc/to-date (tf/parse (tf/formatter fmt) s)))

(defn parse-mdf-date [date-str]
  (try
    (if (= 8 (count date-str))
      (str-to-java-date "yyyyMMdd" date-str)
      (do
        (println "parse-mdf-date: Invalid date string " date-str)
        (java.util.Date.)))
    (catch Exception e
      (println (str "parse-mdf-date exception: " (.getMessage e)))
      (java.util.Date.))))

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
          (s/join (flatten
                      (interpose
                       \: (partition 2 (s/replace m-str #"\." "")))))
          :else ":::::")))
