;;      Filename: app_routes.clj
;; Creation Date: Sunday, 05 July 2015 02:40 PM AEST
;; Last Modified: Sunday, 05 July 2015 03:11 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.app-routes
  (:require [arcis.routes.home :refer [home-page]]
            [arcis.routes.login :refer [authenticate-user login-page logout]]
            [arcis.routes.admin.users :refer [user-list]]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET POST ANY]]
            [ring.handler.dump :refer [handle-dump]]            ))

(defroutes base-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defroutes app-routes
  (GET "/" [] (home-page)))

(defroutes debug-routes
  (ANY "/request" [] handle-dump))

(defroutes login-routes
  (GET "/login" [next] (login-page next))
  (POST "/login" [] authenticate-user)
  (GET "/logout" [] logout))

(defroutes api-routes
  (GET "/admin/users" [] user-list))
