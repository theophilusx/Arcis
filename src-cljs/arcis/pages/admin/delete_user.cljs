;;      Filename: delete_user.cljs
;; Creation Date: Wednesday, 08 July 2015 02:08 PM AEST
;; Last Modified: Saturday, 19 September 2015 07:14 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.delete-user
  (:require     [arcis.utils :as u]
                [arcis.pages.admin.users-ajax :refer [get-app-users]]
                [reagent-modals.modals :as modals]
                [reagent.session :as session]
                [ajax.core :refer [POST]]))

(defn handle-delete-resp [response]
  (if (= "success" (:status response))
    (do
      (get-app-users)
      (u/report-success (:message response)))
    (u/report-error (:message response))))

(defn handle-delete-user [id]
  (when (u/is-authenticated?)
    (let [params (assoc (u/default-post-params)
                        :params {:id id}
                        :handler #'handle-delete-resp
                        :error-handler (u/default-error-response
                                         "handle-delete-user"))]
      (POST "/admin/delete" params))))

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
