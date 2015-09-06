;;      Filename: user_role.cljs
;; Creation Date: Wednesday, 08 July 2015 02:34 PM AEST
;; Last Modified: Sunday, 06 September 2015 07:30 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-role
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [ajax.core :refer [POST]]))

(defn role-change-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (do
        (get-app-users)
        (u/report-success))
      (u/report-error (:message rsp)))))

(defn role-change-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Change role error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "handle-role-change-error-resp: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn update-user-role [id val]
  (let [params (assoc (u/default-post-params)
                      :params {:id id
                               :role val}
                      :handler #'role-change-resp
                      :error-handler #'role-change-error-resp)]
    (POST "/admin/role" params)))

(defn user-role-selector [id role]
  (c/menu-component id role "userrole" #'update-user-role ["Admin" "View"]))
