;;      Filename: middleware.clj
;; Creation Date: Saturday, 04 July 2015 05:16 PM AEST
;; Last Modified: Saturday, 19 September 2015 10:17 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.middleware
  (:require [arcis.layout :refer [*app-context* error-page]]
            [taoensso.timbre :as timbre]
            [environ.core :refer [env]]
            [selmer.middleware :refer [wrap-error-page]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.flash :refer [wrap-flash]]
            [immutant.web.middleware :refer [wrap-session]]
            [ring.middleware.reload :as reload]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.util.http-response :as http-resp]
            [arcis.layout :refer [*identity*]]
            [cheshire.core :refer [generate-string]]
            [buddy.core.nonce :as nonce]
            [buddy.sign.jwe :as jwe]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [buddy.auth.backends.token :refer [jwe-backend]]
            [buddy.auth.middleware :refer [wrap-authentication
                                           wrap-authorization]]
            [liberator.dev :refer [wrap-trace]]))

(defonce secret (nonce/random-bytes 32))

(defn unauthorized-handler [request metadata]
  (http-resp/unauthorized
   (generate-string {:status-text "not-authenticated"
                     :message "Invalid token"})))

(def auth-backend (jwe-backend {:secret secret
                                :options {:alg :a256kw :enc :a128gcm}
                                :unauthorized-handler unauthorized-handler}))

(defn wrap-context [handler]
  (fn [request]
    (binding [*app-context*
              (if-let [context (:servlet-context request)]
                ;; If we're not inside a servlet environment
                ;; (for example when using mock requests), then
                ;; .getContextPath might not exist
                (try (.getContextPath context)
                     (catch IllegalArgumentException _ context))
                ;; if the context is not specified in the request
                ;; we check if one has been specified in the environment
                ;; instead
                (:app-context env))]
      (handler request))))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (let [msg (.getMessage t)]
          (timbre/error t)
          (if (= "checksum failed" msg)
            {:status 498
             :headers {"Content-Type" "application/json"}
             :body (generate-string
                    {:status-text "Token expired/invalid"
                     :message (str "Supplied authorization token is invalid. "
                                   "Logout and login again to obtain "
                                   "a new token.")})}
            (assoc (http-resp/internal-server-error
                    (generate-string {:status-text "Internal Server Error"
                                      :message (str "Error: " msg)}))
                   :headers {"Content-Type" "application/json"})))))))

(defn wrap-dev [handler]
  (if (env :dev)
    (-> handler
        reload/wrap-reload
        wrap-error-page
        wrap-exceptions)
    handler))

(defn wrap-csrf [handler]
  (wrap-anti-forgery
   handler
   (assoc (http-resp/forbidden
           (generate-string {:status-text "Forbidden"
                             :message "Invalid anti-forgery-token"}))
          :headers {"Content-Type" "application/json"})))

(defn wrap-formats [handler]
  (wrap-restful-format handler {:formats [:json-kw :transit-json
                                          :transit-msgpack]}))

(defn on-error [req rsp]
  (assoc (http-resp/forbidden
          (generate-string {:status-text "Forbidden"
                            :message (str "Access to " (:uri req)
                                          " is not authorized")}))
         :headers {"Content-Type" "application/json"}))

(defn wrap-authorize [handler]
  (wrap-authorization handler auth-backend))

(defn wrap-auth [handler]
  (wrap-authentication handler auth-backend))

(defn wrap-secure-headers [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Content-Security-Policy"]
                    "default-src https: data: 'unsafe-inline' 'unsafe-eval'")
          (assoc-in [:headers "Strict-Transport-Security"]
                    "\"max-age=31536000; includeSubdomains\" always;")
          (assoc-in [:headers "Server"] "a server")
          (assoc-in [:headers "X-Content-Type-Options"] "nosniff")))))

(defn wrap-base [handler]
  (-> handler
      wrap-dev
      ;; wrap-authorize
      wrap-auth
      wrap-formats
      wrap-webjars
      wrap-flash
      (wrap-defaults
        (-> site-defaults
            (assoc-in [:security :anti-forgery] false)
            (dissoc :session)))
      wrap-context
      ;; wrap-secure-headers
      wrap-internal-error))
