;;      Filename: middleware.clj
;; Creation Date: Saturday, 04 July 2015 05:16 PM AEST
;; Last Modified: Tuesday, 15 September 2015 12:39 PM AEST
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
            [ring.util.http-response :as http-response]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]
            [arcis.layout :refer [*identity*]]
            [cheshire.core :refer [generate-string]]
            [liberator.dev :refer [wrap-trace]]))

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
        (timbre/error t)
        (error-page {:status 500
                     :title "Something very bad has happened!"
                     :message "We've dispatched a team of gnomes."})))))

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
    {:error-response
     (error-page
       {:status 403
        :title "Invalid anti-forgery token"})}))

(defn wrap-formats [handler]
  (wrap-restful-format handler {:formats [:json-kw :transit-json
                                          :transit-msgpack]}))

;; (defn on-error [request response]
;;   (error-page
;;     {:status 403
;;      :title (str "Access to " (:uri request) " is not authorized")}))
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
      :else (http-response/temporary-redirect (str "/login?next=" uri)))))

(defn wrap-restricted [handler]
  (restrict handler {:handler authenticated?
                     :on-error on-error}))

(defn wrap-identity [handler]
  (fn [request]
    (binding [*identity* (get-in request [:session :identity])]
      (handler request))))

(defn wrap-auth [handler]
  (-> handler
      wrap-identity
      (wrap-authentication (session-backend))))

(defn wrap-base [handler]
  (-> handler
      wrap-dev
      wrap-auth
      wrap-formats
      wrap-webjars
      wrap-flash
      (wrap-session {:cookie-attrs {:http-only true}})
      (wrap-defaults
        (-> site-defaults
            (assoc-in [:security :anti-forgery] false)
            (dissoc :session)))
      wrap-context
      wrap-internal-error))
