;;      Filename: user_role.cljs
;; Creation Date: Wednesday, 08 July 2015 02:34 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:18 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-role
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [ajax.core :refer [POST]]))

(defn role-change-resp [response]
  (if (= "success" (:status response))
    (do
      (get-app-users)
      (u/report-success))
    (u/report-error (:message response))))

(defn update-user-role [id val]
  (when (state/is-authenticated?)
    (let [params (assoc (u/default-post-params)
                        :params {:id id
                                 :role val}
                        :handler #'role-change-resp
                        :error-handler (u/default-error-response
                                         "update-user-role"))]
      (POST "/admin/role" params))))

(defn user-role-selector [id role]
  (c/menu-component id role "userrole" #'update-user-role ["Admin" "View"]))
