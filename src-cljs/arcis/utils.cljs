;;      Filename: utils.cljs
;; Creation Date: Sunday, 05 July 2015 06:42 PM AEST
;; Last Modified: Friday, 25 September 2015 09:59 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.utils
  (:require [arcis.state :as state]
            [secretary.core :as secretary]))

(defn digit-keyword
  "Convert an integer to a keyword"
  [d]
  (keyword (str d)))

(defn validation-error-msg
  "Convert a bouncer validation error map to an error message string"
  [validation-map]
  (str "Bad form data: "
       (reduce (fn [s k]
                 (first (k validation-map))) "" (keys validation-map))))

(defn set-page-status!
  "Set status in session atom
  status-type can be :error :success :warning :ignore :expired"
  [status-type msg]
  (state/set-value-in! [(state/this-page) :status :type] status-type)
  (state/set-value-in! [(state/this-page) :status :msg] msg))

(defn report-error [name msg]
  (.log js/console (str name " - " msg))
  (set-page-status! :error msg))

(defn report-success
  ([]
   (set-page-status! nil nil))
  ([msg]
   (set-page-status! :success msg))
  ([status-type msg]
   (set-page-status! status-type msg)))

(defn report-unauthenticated [name]
  (report-error name "You are not authenticated. Please login"))

(defn report-expired-session []
  (set-page-status! :expired (str "Your session token has expired. "
                                  "Please login again to continue."))
  (state/set-value-in! [:user-data :token] nil))

(defn expired-session?
  "Tests to see if AJAX call error was due to expired session"
  [status status-text]
  (and (= 401 status)
       (= "not-authenticated" status-text)))
