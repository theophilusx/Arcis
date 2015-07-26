;;      Filename: utils.cljs
;; Creation Date: Sunday, 05 July 2015 06:42 PM AEST
;; Last Modified: Sunday, 26 July 2015 11:15 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.utils
  (:require [reagent.cookies :as cookie]
            [arcis.pages.components :as c]
            [secretary.core :as secretary]
            [reagent.session :as session]))

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
  {:format :json
   :response-format :json
   :keywords? true})

(defn set-page-status!
  "Set status in session atom
  status-type can be :error :success :warning :ignore :expired"
  [status-type msg]
  (session/assoc-in! [(session/get :page) :status :type] status-type)
  (session/assoc-in! [(session/get :page) :status :msg] msg))

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
  (set-page-status! :expired
                    [:div "Your session has expired. Please "
                     [:a {:href "/login"} "login"] " to continue"]))

(defn expired-session?
  "Tests to see if AJAX call error was due to expired session"
  [status status-text]
  (.log js/console (str "expired-session? status = " status
                        " text = " status-text))
  (and (= 419 status)
       (= "session-timeout" status-text)))

(defn active-tab []
  (session/get-in [(session/get :page) :tab]))

(defn set-active-tab [v]
  (session/assoc-in! [(session/get :page) :tab] v)
  (session/assoc-in! [(session/get :page) :status :type] :ignore))

(defn get-tab-state [t]
  (if (= t (active-tab))
    "active"
    ""))
