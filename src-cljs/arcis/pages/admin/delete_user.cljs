;;      Filename: delete_user.cljs
;; Creation Date: Wednesday, 08 July 2015 02:08 PM AEST
;; Last Modified: Friday, 25 September 2015 10:02 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.delete-user
  (:require     [arcis.utils :as u]
                [arcis.pages.admin.users-ajax :refer [get-app-users]]
                [arcis.ajax :as ajax]
                [arcis.state :as state]
                [reagent-modals.modals :as modals]))

(defn process-delete [response]
  (get-app-users)
  (u/report-success {:message response}))

(defn handle-delete-user [id]
  (if (state/is-authenticated?)
    (ajax/post-it "handle-delete-user" "/admin/delete"
                  {:id id} #'process-delete)
    (u/report-unauthenticated "handle-delete-user")))

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
