;;      Filename: users_ajax.cljs
;; Creation Date: Friday, 10 July 2015 04:09 PM AEST
;; Last Modified: Friday, 25 September 2015 10:10 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.users-ajax
  (:require [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.utils :as u]
            [arcis.pages.components :as c]))

(defn user-list-to-hash
  "Takes a list of user maps keyed with strings and converts to a map 
  consisting of user record maps indexed/keyed by id"
  [user-list]
  (reduce (fn [m u]
            (assoc m (u/digit-keyword (:id u))
                   {:id (:id u)
                    :first-name (:first_name u)
                    :last-name (:last_name u)
                    :user-role (:user_role u)
                    :email (:email u)
                    :is-active (:is_active u)
                    :last-login (:last_login u)}))
          {} user-list))

(defn process-users-list
  "Callback used to process response from AJAX call to get user list"
  [response]
  (let [user-hash (user-list-to-hash response)]
    (state/set-value-in! [:admin :users] user-hash)))

(defn get-app-users []
  (if (state/is-authenticated?)
    (ajax/get-it "get-app-users" "/admin/users" #'process-users-list)
    (u/report-unauthenticated "get-app-users")))

