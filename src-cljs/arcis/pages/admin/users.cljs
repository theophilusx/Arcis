;;      Filename: users.cljs
;; Creation Date: Sunday, 05 July 2015 01:36 PM AEST
;; Last Modified: Friday, 04 September 2015 10:42 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.users
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.pages.admin.delete-user :refer [delete-user-button]]
            [arcis.pages.admin.password :refer [password-component]]
            [arcis.pages.admin.user-state :refer [user-state-button]]
            [arcis.pages.admin.user-role :refer [user-role-selector]]
            [arcis.pages.admin.register :refer [register-component]]))

(defn user-table-row [r]
  [:tr
   [:td (:id r)]
   [:td (:first-name r) " " (:last-name r)]
   [:td (:email r)]
   [:td (or (:last-login r) "Never")]
   [:td [user-role-selector (:id r) (:user-role r)]]
   [:td [user-state-button (:id r) (:is-active r)]]
   [:td [password-component (:id r)]]
   [:td [delete-user-button (:id r)]]])

(defn users-table []
  (let [users (session/get-in [(u/this-page) :users])]
    [:div
     [:table.table.table-striped
      [:thead
       [:tr
        [:th "Id"]
        [:th "Name"]
        [:th "Email"]
        [:th "Last Login"]
        [:th "Role"]
        [:th "Active?"]
        [:th "Password"]
        [:th]]]
      [:tbody
       (for [u (keys users)]
         ^{:key u} [user-table-row (u users)])]]
     [:button.btn.btn-primary
      {:type "button" :on-click #(get-app-users)} "Refresh"]]))

(defn users-component []
  (if-not (session/get-in [(u/this-page) :users])
    (get-app-users))
  [:div
   [users-table]])

