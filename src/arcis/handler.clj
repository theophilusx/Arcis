;;      Filename: handler.clj
;; Creation Date: Saturday, 04 July 2015 05:16 PM AEST
;; Last Modified: Tuesday, 15 September 2015 12:40 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.handler
  (:require [compojure.core :refer [defroutes routes wrap-routes]]
            [arcis.layout :refer [error-page]]
            [arcis.routes.app-routes :as r]
            [arcis.middleware :as middleware]
            [arcis.db.core :as db]
            [arcis.db.users :as udb]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.3rd-party.rotor :as rotor]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [arcis.utils :as u]))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []

  (timbre/merge-config!
    {:level     (if (env :dev) :trace :info)
     :appenders {:rotor (rotor/rotor-appender
                          {:path "lt.log"
                           :max-size (* 512 1024)
                           :backlog 10})}})

  (if (env :dev) (parser/cache-off!))
  (db/connect!)
  (when (= 0 (count (udb/get-user-by-email {:email "theophilusx@gmail.com"})))
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
  (-> (routes
       #'r/login-routes
       (wrap-routes (routes
                     #'r/api-routes
                     (wrap-routes #'r/app-routes middleware/wrap-csrf))
                    middleware/wrap-restricted)
       #'r/base-routes)
      middleware/wrap-base))
