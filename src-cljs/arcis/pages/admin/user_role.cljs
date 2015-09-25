;;      Filename: user_role.cljs
;; Creation Date: Wednesday, 08 July 2015 02:34 PM AEST
;; Last Modified: Friday, 25 September 2015 10:11 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-role
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [arcis.ajax :as ajax]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]))

(defn process-role-change [response]
  (get-app-users))

(defn update-user-role [id val]
  (if (state/is-authenticated?)
    (ajax/post-it "update-user-role" "/admin/role" {:id id :role val}
                  #'process-role-change)
    (u/report-unauthenticated "update-user-role")))

(defn user-role-selector [id role]
  (c/menu-component id role "userrole" #'update-user-role ["Admin" "View"]))
