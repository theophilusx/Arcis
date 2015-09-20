;;      Filename: utils.cljs
;; Creation Date: Sunday, 05 July 2015 06:42 PM AEST
;; Last Modified: Sunday, 20 September 2015 02:52 PM AEST
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

;; (defn default-post-params
;;   "Setup default parameter hash for cljs-ajax POST calls"
;;   []
;;   (let [token (str js/csrf)]
;;     {:format :json
;;      :response-format :json
;;      :keywords? true
;;      :headers {"X-CSRF-Token" token}}))

(defn default-post-params
  "Setup default parameter hash for cljs-ajax POST calls"
  []
  (if-let [token (state/value-in [:user-data :token])]
    {:format :json
     :response-format :json
     :keywords? true
     :headers {"Authorization" (str "Token " token)}}
    {:format :json
     :response-format :json
     :keywords? true}))

(defn set-page-status!
  "Set status in session atom
  status-type can be :error :success :warning :ignore :expired"
  [status-type msg]
  (state/set-value-in! [(state/this-page) :status :type] status-type)
  (state/set-value-in! [(state/this-page) :status :msg] msg))

(defn report-error [msg]
  (set-page-status! :error msg))

(defn report-success
  ([]
   (set-page-status! nil nil))
  ([msg]
   (set-page-status! :success msg))
  ([status-type msg]
   (set-page-status! status-type msg)))

(defn report-expired-session []
  (.log js/console "report-expired-session")
  (set-page-status! :expired (str "Your session token has expired. "
                                  "Please login again to continue."))
  (state/set-value-in! [:user-data :token] nil))

(defn expired-session?
  "Tests to see if AJAX call error was due to expired session"
  [status status-text]
  (.log js/console (str "expired-session? status = " status
                        " text = " status-text))
  (and (= 401 status)
       (= "not-authenticated" status-text)))

(defn default-error-response [name]
  (fn [ctx]
    (let [rsp (js->clj (:response ctx) :keywordize-keys true)
          msg (str "Error: " (:status ctx) " " (:status-text rsp)
                   " " (:message rsp))]
      (.log js/console (str name ": " msg))
      (if (expired-session? (:status ctx) (:status-text rsp))
        (report-expired-session)
        (report-error msg)))))
