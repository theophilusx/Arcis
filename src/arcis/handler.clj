;;      Filename: handler.clj
;; Creation Date: Saturday, 04 July 2015 05:16 PM AEST
;; Last Modified: Friday, 23 October 2015 10:50 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.handler
  (:require [arcis.db.core :as db]
            [arcis.db.users :as udb]
            [arcis.middleware :as middleware]
            [arcis.routes.app-routes :as r]
            [arcis.utils :as u]
            [compojure.core :refer [routes wrap-routes]]
            [environ.core :refer [env]]
            [selmer.parser :as parser]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.3rd-party.rotor :as rotor]))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []

  (timbre/merge-config!
    {:level     (if (env :dev) :trace :info)
     :appenders {:rotor (rotor/rotor-appender
                          {:path "arcis.log"
                           :max-size (* 512 1024)
                           :backlog 10})}})

  (if (env :dev) (parser/cache-off!))
  (db/connect!)
  (when (zero? (count (udb/get-user-by-email {:email "theophilusx@gmail.com"})))
    (udb/create-user! {:first_name "Tim"
                       :last_name "Cross"
                       :email "theophilusx@gmail.com"
                       :user_role "Admin"
                       :is_active true
                       :pass (u/encrypt "Dev:100Arcis")}))
  (timbre/info (str
                 "\n-=[lt started successfully"
                 (when (env :dev) " using the development profile")
                 "]=-")))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "lt is shutting down...")
  (db/disconnect!)
  (timbre/info "shutdown complete!"))

;; (def app-routes
;;   (routes
;;     (wrap-routes #'home-routes middleware/wrap-csrf)
;;     (route/not-found
;;       (:body
;;         (error-page {:status 404
;;                      :title "page not found"})))))

;; (def app (middleware/wrap-base #'app-routes))

(def app
  (middleware/wrap-base
    (routes
      #'r/login-routes
      #'r/api-routes
      (wrap-routes #'r/app-routes middleware/wrap-csrf)
      #'r/base-routes)))
