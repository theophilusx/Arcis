;;      Filename: delete_user.cljs
;; Creation Date: Wednesday, 08 July 2015 02:08 PM AEST
;; Last Modified: Wednesday, 08 July 2015 04:21 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.delete-user
  (:require     [arcis.utils :as u]
                [reagent-modals.modals :as modals]
                [reagent.session :as session]
                [ajax.core :refer [POST]]))

(defn handle-delete-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success (:message rsp))
      (u/report-error (:message rsp)))))

(defn handle-delete-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Delete user error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console msg)
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn handle-delete-user [id]
  (.log js/console (str "Delete user " id))
  (let [params (assoc (u/default-post-params)
                      :params {:id id}
                      :handler #'handle-delete-resp
                      :error-handler #'handle-delete-error-resp)]
    (POST "/admin/user-delete" params)))

(defn delete-user-modal [id]
  (let [dkw (u/digit-keyword id)]
    [:div
     [:div.modal-header
      [modals/close-button]
      [:h4 {:class "modal-title"} "Delete User"]]
     [:div.modal-body
      [:p (str (session/get-in [(session/get :page) :users dkw :first-name]) " "
               (session/get-in [(session/get :page) :users dkw :last-name]))]
      [:p (session/get-in [(session/get :page) :users dkw :email])]
      [:p "Are you sure you want to permanently delete this user?"]]
     [:div.modal-footer
      [:button.btn.btn-default {:data-dismiss "modal"} "Cancel"]
      [:button.btn.btn-danger
       {:data-dismiss "modal" :on-click #(handle-delete-user id)} "Delete!"]]]))

(defn delete-user-button [id]
  [:div.btn.btn-danger {:on-click #(modals/modal! (delete-user-modal id))}
   "Delete"])
