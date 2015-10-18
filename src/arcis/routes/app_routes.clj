;;      Filename: app_routes.clj
;; Creation Date: Sunday, 05 July 2015 02:40 PM AEST
;; Last Modified: Sunday, 18 October 2015 06:05 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.app-routes
  (:require [arcis.routes.home :refer [home-page]]
            [arcis.routes.login :refer [authenticate-user]]
            [arcis.routes.admin.users :refer [user-list]]
            [arcis.routes.admin.register :refer [register-user]]
            [arcis.routes.admin.user-state :refer [set-user-state]]
            [arcis.routes.admin.user-role :refer [set-user-role]]
            [arcis.routes.admin.password :refer [change-password]]
            [arcis.routes.admin.delete-user :refer [delete-user]]
            [arcis.routes.admin.network :refer [add-group group-list]]
            [arcis.routes.admin.delete-network :refer [delete-network-group]]
            [arcis.routes.admin.network-state :refer [set-group-state]]
            [arcis.routes.admin.network-pattern :refer [group-pattern]]
            [arcis.routes.hosts.upload :refer [upload-hosts]]
            [arcis.routes.hosts.host-list :refer [host-list]]
            [arcis.routes.hosts.update-host :refer [do-host-update]]
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
  (POST "/login" [] authenticate-user))

(defroutes api-routes
  (GET "/admin/users" [] user-list)
  (POST "/admin/register" [] register-user)
  (POST "/admin/state" [] set-user-state)
  (POST "/admin/role" [] set-user-role)
  (POST "/admin/password" [] change-password)
  (POST "/admin/delete" [] delete-user)
  (GET "/admin/groups" [] group-list)
  (POST "/admin/add-network" [] add-group)
  (POST "/admin/delete-network" [] delete-network-group)
  (POST "/admin/network-state" [] set-group-state)
  (POST "/admin/network-pattern" [] group-pattern)
  (GET "/hosts/list" [] host-list)
  (POST "/hosts/upload" [] upload-hosts)
  (POST "/hosts/update-host" [] do-host-update))
