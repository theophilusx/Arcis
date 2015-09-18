;;      Filename: users_ajax.cljs
;; Creation Date: Friday, 10 July 2015 04:09 PM AEST
;; Last Modified: Friday, 18 September 2015 05:17 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.users-ajax
  (:require [reagent.session :as session]
            [ajax.core :refer [GET]]
            [arcis.utils :as u]
            [arcis.pages.components :as c]))

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
    (session/assoc-in! [(u/this-page) :users] user-hash)))

(defn get-app-users
  "Retrieve list of application users"
  []
  (let [token (session/get-in [:user-data :token])]
    (GET "/admin/users" {:format :json
                         :response-format :json
                         :keywords? true
                         :headers {"Authorization" (str "Token " token)}
                         :handler users-list-resp
                         :error-handler (u/default-error-response
                                          "get-app-users")})))
