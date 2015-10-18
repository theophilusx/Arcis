;;      Filename: ajax.cljs
;; Creation Date: Sunday, 20 September 2015 03:48 PM AEST
;; Last Modified: Sunday, 18 October 2015 07:15 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.ajax
  (:require [ajax.core :refer [GET POST]]
            [arcis.state :as state]
            [arcis.utils :as u]))


;; (defn default-post-params
;;   "Setup default parameter hash for cljs-ajax POST calls"
;;   []
;;   (let [token (str js/csrf)]
;;     {:format :json
;;      :response-format :json
;;      :keywords? true
;;      :headers {"X-CSRF-Token" token}}))

(defn default-error-handler [name]
  (fn [ctx]
    (let [rsp (js->clj (:response ctx) :keywordize-keys true)
          msg (str "Error: " (:status ctx) " " (:status-text rsp)
                   " " (:message rsp))]
      (if (u/expired-session? (:status ctx) (:status-text rsp))
        (u/report-expired-session)
        (u/report-error name msg)))))

(defn default-handler [handler-fn]
  (fn [response]
    (when handler-fn
      (handler-fn response))))

(defn default-post-params
  "Setup default parameter hash for cljs-ajax POST calls"
  [name params handler-fn]
  (if-let [token (state/value-in [:user-data :token])]
    {:format :json
     :response-format :json
     :keywords? true
     :params params
     :headers {"Authorization" (str "Token " token)}
     :handler (default-handler handler-fn)
     :error-handler (default-error-handler name)}
    {:format :json
     :response-format :json
     :keywords? true
     :params params
     :handler (default-handler handler-fn)
     :error-handler (default-error-handler name)}))

(defn default-get-params
  "Setup default parameter hash for cljs-ajax GET calls"
  [name handler-fn]
  (if-let [token (state/value-in [:user-data :token])]
    {:format :json
     :response-format :json
     :keywords? true
     :headers {"Authorization" (str "Token " token)}
     :handler (default-handler handler-fn)
     :error-handler (default-error-handler name)}
    {:format :json
     :response-format :json
     :keywords? true
     :handler (default-handler handler-fn)
     :error-handler (default-error-handler name)}))

(defn post-it [name url params handler-fn]
  (let [post-params (default-post-params name params handler-fn)]
    (POST url post-params)))

(defn get-it [name url handler-fn]
  (let [get-params (default-get-params name handler-fn)]
    (GET url get-params)))
