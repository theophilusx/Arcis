;;      Filename: handler.clj
;; Creation Date: Saturday, 04 July 2015 05:16 PM AEST
;; Last Modified: Sunday, 05 July 2015 03:11 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.handler
  (:require [compojure.core :refer [defroutes routes wrap-routes]]
            [arcis.routes.app-routes :as r]
            [arcis.middleware :as middleware]
            [arcis.session :as session]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.3rd-party.rotor :as rotor]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [clojure.tools.nrepl.server :as nrepl]))

(defonce nrepl-server (atom nil))

(defn start-nrepl
  "Start a network repl for debugging when the :repl-port is set in the environment."
  []
  (when-let [port (env :repl-port)]
    (try
      (reset! nrepl-server (nrepl/start-server :port port))
      (timbre/info "nREPL server started on port" port)
      (catch Throwable t
        (timbre/error "failed to start nREPL" t)))))

(defn stop-nrepl []
  (when-let [server @nrepl-server]
    (nrepl/stop-server server)))

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
  (start-nrepl)
  ;;start the expired session cleanup job
  (session/start-cleanup-job!)
  (timbre/info (str
                 "\n-=[arcis started successfully"
                 (when (env :dev) "using the development profile")
                 "]=-")))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "arcis is shutting down...")
  (stop-nrepl)
  (timbre/info "shutdown complete!"))

(def app
  (-> (routes
       #'r/login-routes
       #'r/debug-routes
       (wrap-routes (routes
                     #'r/api-routes
                     (wrap-routes #'r/app-routes middleware/wrap-csrf))
                    middleware/wrap-restricted)
       #'r/base-routes)
      middleware/wrap-base))

