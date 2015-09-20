;;      Filename: delete_user.cljs
;; Creation Date: Wednesday, 08 July 2015 02:08 PM AEST
;; Last Modified: Sunday, 20 September 2015 04:22 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.delete-user
  (:require     [arcis.utils :as u]
                [arcis.pages.admin.users-ajax :refer [get-app-users]]
                [arcis.ajax :as ajax]
                [reagent-modals.modals :as modals]
                [arcis.state :as state]
                [ajax.core :refer [POST]]))

(defn process-delete [response]
  (get-app-users)
  (u/report-success {:message response}))

(defn handle-delete-user [id]
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-post-params)
                        :params {:id id}
                        :handler (ajax/default-handler "delete-user"
                                   #'process-delete true)
                        :error-handler (ajax/default-error-handler
                                         "delete-user"))]
      (POST "/admin/delete" params))))

(defn delete-user-modal [id]
  (let [dkw (u/digit-keyword id)]
    [:div
     [:div.modal-header
      [modals/close-button]
      [:h4 {:class "modal-title"} "Delete User"]]
     [:div.modal-body
      [:p (str (state/value-in [(state/this-page) :users dkw :first-name]) " "
               (state/value-in [(state/this-page) :users dkw :last-name]))]
      [:p (state/value-in [(state/this-page) :users dkw :email])]
      [:p "Are you sure you want to permanently delete this user?"]]
     [:div.modal-footer
      [:button.btn.btn-default {:data-dismiss "modal"} "Cancel"]
      [:button.btn.btn-danger
       {:data-dismiss "modal" :on-click #(handle-delete-user id)} "Delete!"]]]))

(defn delete-user-button [id]
  [:div.btn.btn-danger {:on-click #(modals/modal! (delete-user-modal id))}
   "Delete"])
