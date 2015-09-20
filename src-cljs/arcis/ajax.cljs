;;      Filename: ajax.cljs
;; Creation Date: Sunday, 20 September 2015 03:48 PM AEST
;; Last Modified: Sunday, 20 September 2015 06:27 PM AEST
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

(defn default-get-params
  "Setup default parameter hash for cljs-ajax GET calls"
  []
  (if-let [token (state/value-in [:user-data :token])]
    {:format :json
     :response-format :json
     :keywords? true
     :headers {"Authorization" (str "Token " token)}}
    {:format :json
     :response-format :json
     :keywords? true}))


(defn default-error-handler [name]
  (fn [ctx]
    (let [rsp (js->clj (:response ctx) :keywordize-keys true)
          msg (str "Error: " (:status ctx) " " (:status-text rsp)
                   " " (:message rsp))]
      (if (u/expired-session? (:status ctx) (:status-text rsp))
        (u/report-expired-session)
        (u/report-error name msg)))))

(defn default-handler [name handler-fn report-status]
  (fn [response]
    (handler-fn response)
    (if report-status
      (if (= "Success" (:status-text response))
        (u/report-success (:message response))
        (u/report-error name (:message response)))
      (u/report-success))))
