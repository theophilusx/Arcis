;;      Filename: users_ajax.cljs
;; Creation Date: Friday, 10 July 2015 04:09 PM AEST
;; Last Modified: Sunday, 02 August 2015 06:52 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.users-ajax
  (:require [reagent.session :as session]
            [ajax.core :refer [GET]]
            [arcis.utils :as u]))

(defn user-list-to-hash
  "Takes a list of user maps keyed with strings and converts to a map 
  consisting of user record maps indexed/keyed by id"
  [user-list]
  (reduce (fn [m u]
            (assoc m (u/digit-keyword (get u "id"))
                   {:id (get u "id")
                    :first-name (get u "first_name")
                    :last-name (get u "last_name")
                    :user-role (get u "user_role")
                    :email (get u "email")
                    :is-active (get u "is_active")
                    :last-login (get u "last_login")}))
          {} user-list))

(defn users-list-resp
  "Callback used to process response from AJAX call to get user list"
  [response]
  (let [user-list (js->clj response :keywordize-keys true)
        user-hash (user-list-to-hash user-list)]
    (session/assoc-in! [(session/get :page) :users] user-hash)))

(defn users-list-error-resp
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
                       :handler users-list-resp
                       :error-handler users-list-error-resp}))
