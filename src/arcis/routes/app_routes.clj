;;      Filename: app_routes.clj
;; Creation Date: Sunday, 05 July 2015 02:40 PM AEST
;; Last Modified: Tuesday, 15 September 2015 11:57 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.app-routes
  (:require [arcis.routes.home :refer [home-page]]
            [arcis.routes.login :refer [authenticate-user login-page logout]]
            [arcis.routes.admin.users :refer [user-list]]
            [arcis.routes.admin.register :refer [register-user]]
            [arcis.routes.admin.user-state :refer [set-user-state]]
            [arcis.routes.admin.user-role :refer [set-user-role]]
            [arcis.routes.admin.password :refer [change-password]]
            [arcis.routes.admin.delete-user :refer [delete-user]]
            [arcis.routes.admin.network :refer [add-group group-list]]
            [arcis.routes.hosts.upload :refer [upload-hosts]]
            [arcis.routes.hosts.host-list :refer [host-list]]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET POST ANY]]))

(defroutes base-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defroutes app-routes
  (GET "/" [] (home-page)))

;; (defroutes debug-routes
;;   (ANY "/request" [] handle-dump))

(defroutes login-routes
  (GET "/login" [next] (login-page next))
  (POST "/login" [] authenticate-user)
  (GET "/logout" [] logout))

(defroutes api-routes
  (GET "/admin/users" [] user-list)
  (POST "/admin/register" [] register-user)
  (POST "/admin/state" [] set-user-state)
  (POST "/admin/role" [] set-user-role)
  (POST "/admin/password" [] change-password)
  (POST "/admin/delete" [] delete-user)
  (GET "/admin/groups" [] group-list)
  (POST "/admin/add-network" [] add-group)
  (GET "/hosts/list" [] host-list)
  (POST "/hosts/upload" [] upload-hosts))
