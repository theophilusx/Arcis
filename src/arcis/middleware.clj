;;      Filename: middleware.clj
;; Creation Date: Saturday, 04 July 2015 05:16 PM AEST
;; Last Modified: Sunday, 26 July 2015 11:36 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.middleware
  (:require [arcis.session :as session]
            [arcis.layout :refer [*servlet-context* *identity*]]
            [taoensso.timbre :as timbre]
            [environ.core :refer [env]]
            [clojure.java.io :as io]
            [selmer.middleware :refer [wrap-error-page]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.util.response :refer [redirect]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.session-timeout :refer [wrap-idle-session-timeout]]
            [ring.middleware.session.memory :refer [memory-store]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]
            [cheshire.core :refer [generate-string]]
            [liberator.dev :refer [wrap-trace]]))

(defn wrap-servlet-context [handler]
  (fn [request]
    (binding [*servlet-context*
              (if-let [context (:servlet-context request)]
                ;; If we're not inside a servlet environment
                ;; (for example when using mock requests), then
                ;; .getContextPath might not exist
                (try (.getContextPath context)
                     (catch IllegalArgumentException _ context)))]
      (handler request))))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (timbre/error t)
        {:status 500
         :headers {"Content-Type" "text/html"}
         :body (-> "templates/error.html" io/resource slurp)}))))

(defn wrap-dev [handler]
  (if (env :dev)
    (-> handler
        wrap-error-page
        wrap-exceptions
        (wrap-trace :header))
    handler))

(defn wrap-csrf [handler]
  (wrap-anti-forgery handler))

(defn wrap-formats [handler]
  (wrap-restful-format handler {:formats [:json-kw :transit-json
                                          :transit-msgpack]}))

;; (defn on-error [request response]
;;   {:status  403
;;    :headers {"Content-Type" "text/plain"}
;;    :body    (str "Access to " (:uri request) " is not authorized")})

(defn on-error [request response]
  (let [uri (:uri request)
        id (get-in request [:session :identity])
        accept (get-in request [:headers "accept"])]
    (cond
      (and (nil? id)
           (= "application/json" accept))
      {:status 419
       :headers {"Content-Type" "application/json"}
       :body (generate-string
              {:status "session-timeout"
               :message "Session has timed out. Please login again"})}
      (= "application/json" accept)
      {:status 403
       :headers {"Content-Type" "application/json"}
       :body (generate-string
              {:status "not-authorised"
               :message "Access to " uri " is not authorised"})}
      :else (redirect (str "/login?next=" uri)))))

(def session-timeout-error 
  {:status 419
   :headers {"Content-Type" "application/json"}
   :body (generate-string
          {:status "session-timeout"
           :message "Session has timed out. Please login again"})})

(defn wrap-restricted [handler]
  (restrict handler {:handler authenticated?
                     :on-error on-error}))

(defn wrap-identity [handler]
  (fn [request]
    (binding [*identity* (or (get-in request [:session :identity]) nil)]
      (handler request))))

(defn wrap-auth [handler]
  (-> handler
      wrap-identity
      (wrap-authentication (session-backend))))

(defn wrap-base [handler]
  (-> handler
      wrap-dev
      wrap-auth
      (wrap-idle-session-timeout
       {:timeout (* 60 30)
        :timeout-response session-timeout-error})
      wrap-formats
      (wrap-defaults
       (-> site-defaults
           (assoc-in [:security :anti-forgery] false)
           (assoc-in  [:session :store] (memory-store session/mem))))
      wrap-servlet-context
      wrap-internal-error))
