;;      Filename: users.cljs
;; Creation Date: Sunday, 05 July 2015 01:36 PM AEST
;; Last Modified: Monday, 06 July 2015 06:57 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.users
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [reagent-modals.modals :as modals]
            [ajax.core :refer [GET POST]]
            [arcis.pages.components :as c]
            [arcis.utils :as u]))

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
    (session/put! :app-users user-hash)
    (u/report-success!)))

(defn handle-users-list-error
  "Callback used to process AJAX call errors to get user list"
  [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Error: " (:status ctx) " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "handle-users-list-error: AJAX Error: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session!)
      (u/report-error! msg))))

(defn get-app-users
  "Retrieve list of application users"
  []
  (GET "/admin/users" {:format :json
                       :handler handle-users-list
                       :error-handler handle-users-list-error}))

;;; Delete user
(defn handle-delete-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success! (:message rsp))
      (u/report-error! (:message rsp)))
    (get-app-users)))

(defn handle-delete-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Delete user error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console msg)
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session!)
      (u/report-error! msg))))

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
      [:p (str (session/get-in [:app-users dkw :first-name]) " "
               (session/get-in [:app-users dkw :last-name]))]
      [:p (session/get-in [:app-users dkw :email])]
      [:p "Are you sure you want to permanently delete this user?"]]
     [:div.modal-footer
      [:button.btn.btn-default {:data-dismiss "modal"} "Cancel"]
      [:button.btn.btn-danger
       {:data-dismiss "modal" :on-click #(handle-delete-user id)} "Delete!"]]]))

(defn delete-user-button [id]
  [:div.btn.btn-danger {:on-click #(modals/modal! (delete-user-modal id))}
   "Delete"])

(defn handle-pwd-change-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success! (:message rsp))
      (u/report-error! (:message rsp)))))

(defn handle-pwd-change-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Password change error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console msg)
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session!)
      (u/report-error! msg))))

(defn handle-pwd-change [pdata]
  (let [params (assoc (u/default-post-params)
                      :params {:id (:id @pdata)
                               :password (:pwd @pdata)}
                      :handler #'handle-pwd-change-resp
                      :error-handler #'handle-pwd-change-error-resp)]
    (POST "/admin/password" params)
    (swap! pdata assoc :pwd nil)))

(defn password-component [id]
  (let [pwd-data (atom {:id id
                        :pwd nil})]
    (fn []
      [:div
       [:input {:type "text"
                :value (:pwd @pwd-data)
                :on-change
                #(swap! pwd-data assoc-in [:pwd] (-> % .-target .-value))}]
       [:button {:class "btn btn-primary"
                 :type "button"
                 :on-click (fn []
                             (handle-pwd-change pwd-data))}
        "Change"]])))

;;; Handle active state change
(defn handle-active-toggle-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success!)
      (u/report-error! (:message rsp)))
    (get-app-users)))

(defn handle-active-toggle-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Active state toggle error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "handle-active-toggle-error-resp: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session!)
      (u/report-error! msg))))

(defn handle-is-active-button-click [id]
  (let [dkw (u/digit-keyword id)
        state (session/get-in [:app-users dkw :is-active])
        params (assoc (u/default-post-params)
                      :params {:id id
                               :active-state (not state)}
                      :handler #'handle-active-toggle-resp
                      :error-handler #'handle-active-toggle-error-resp)]
    (POST "/admin/change-state" params)))

(defn is-active-button [id v]
  [:button {:class (str "btn btn-block" (if v " btn-success" " btn-danger"))
            :type "button"
            :on-click #(handle-is-active-button-click id)}
   (if v "Yes" "No")])

(defn handle-role-change-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success!)
      (u/report-error! (:message rsp)))
    (get-app-users)))

(defn handle-role-change-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Change role error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "handle-role-change-error-resp: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session!)
      (u/report-error! msg))))

(defn update-user-role [id val]
  (let [params (assoc (u/default-post-params)
                      :params {:id id
                               :role val}
                      :handler #'handle-role-change-resp
                      :error-handler #'handle-role-change-error-resp)]
    (POST "/admin/change-role" params)))

(defn user-role-selector [id role]
  [c/menu-component id role "userrole" #'update-user-role ["Admin" "View"]])

(defn user-table-row [r]
  [:tr
   [:td (:id r)]
   [:td (:first-name r) " " (:last-name r)]
   [:td (:email r)]
   [:td (or (:last-login r) "Never")]
   [:td [user-role-selector (:id r) (:user-role r)]]
   [:td [is-active-button (:id r) (:is-active r)]]
   [:td [password-component (:id r)]]
   [:td [delete-user-button (:id r)]]])

(defn users-table []
  (let [users (session/get :app-users)]
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

(defn users-page []
  (if-not (session/get :app-users)
    (get-app-users))
  (fn []
    [:div.container
     [c/page-header "Application Users"]
     [:div.row
      [:div.col-md-12
       [modals/modal-window]
       [c/status-component]
       [users-table]]]]))


