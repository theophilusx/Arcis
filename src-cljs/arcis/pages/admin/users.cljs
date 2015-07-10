;;      Filename: users.cljs
;; Creation Date: Sunday, 05 July 2015 01:36 PM AEST
;; Last Modified: Friday, 10 July 2015 02:58 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.users
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [reagent-modals.modals :as modals]
            [ajax.core :refer [GET POST]]
            [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.pages.admin.delete-user :refer [delete-user-button]]
            [arcis.pages.admin.password :refer [password-component]]
            [arcis.pages.admin.user-state :refer [user-state-button]]
            [arcis.pages.admin.user-role :refer [user-role-selector]]
            [arcis.pages.admin.register :refer [register-component]]))

;;; Application users list
(defn user-list-to-hash
  "Takes a list of user maps keyed with strings and converts to a map 
  consisting of user record maps indexed/keyed by id"
  [user-list]
  (reduce (fn [m u]
            (assoc
             m (keyword (str (get u "id")))
             {:id (get u "id") :first-name (get u "first_name")
              :last-name (get u "last_name") :user-role (get u "user_role")
              :email (get u "email") :is-active (get u "is_active")
              :last-login (get u "last_login")}))
          {} user-list))

(defn handle-users-list
  "Callback used to process response from AJAX call to get user list"
  [response]
  (let [user-list (js->clj response :keywordize-keys true)
        user-hash (user-list-to-hash user-list)]
    (session/assoc-in! [(session/get :page) :users] user-hash)
    (u/report-success)))

(defn handle-users-list-error
  "Callback used to process AJAX call errors to get user list"
  [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Error: " (:status ctx) " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "handle-users-list-error: AJAX Error: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn get-app-users
  "Retrieve list of application users"
  []
  (GET "/admin/users" {:format :json
                       :handler handle-users-list
                       :error-handler handle-users-list-error}))

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
  (let [users (session/get-in [(session/get :page) :users])]
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
         ^{:key u} [user-table-row (u users)])]]]))

(defn users-component []
  [:div
   [users-table]])

(defn active-tab []
  (session/get-in [(session/get :page) :tab]))

(defn set-active-tab [v]
  (session/assoc-in! [(session/get :page) :tab] v))

(defn users-page []
  (if-not (session/get-in [(session/get :page) :users])
    (get-app-users))
  (if-not (active-tab)
    (set-active-tab 1))
  (fn []
    [:div.container
     [c/page-header "User Administration"]
     [modals/modal-window]
     [:div.row
      [:div.col-md-12
       [c/status-component]
       [:div.row
        [:div {:class "btn-group" :role "group"}
         [:button {:class (str "btn " (if (= 1 (active-tab))
                                        "btn-primary" "btn-default"))
                   :type "button" :on-click #(set-active-tab 1)} "Users"]
         [:button {:class (str "btn " (if (= 2 (active-tab))
                                        "btn-primary" "btn-default"))
                   :type "button" :on-click #(set-active-tab 2)} "Register"]]
        [:hr]
        (if (= 1 (session/get-in [(session/get :page) :tab]))
          [users-component]
          [register-component])]]]]))
