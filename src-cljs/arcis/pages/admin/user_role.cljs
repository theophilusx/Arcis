;;      Filename: user_role.cljs
;; Creation Date: Wednesday, 08 July 2015 02:34 PM AEST
;; Last Modified: Sunday, 20 September 2015 05:29 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-role
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [arcis.ajax :as ajax]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [ajax.core :refer [POST]]))

(defn process-role-change [response]
  (get-app-users))

(defn update-user-role [id val]
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-post-params)
                        :params {:id id
                                 :role val}
                        :handler (ajax/default-handler "update-user-role"
                                   #'process-role-change true)
                        :error-handler (ajax/default-error-handler
                                         "update-user-role"))]
      (POST "/admin/role" params))))

(defn user-role-selector [id role]
  (c/menu-component id role "userrole" #'update-user-role ["Admin" "View"]))
