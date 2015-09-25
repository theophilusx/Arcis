;;      Filename: register.cljs
;; Creation Date: Sunday, 19 April 2015 02:44 PM AEST
;; Last Modified: Friday, 25 September 2015 10:09 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.register
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(def register-template
  [:div.row
   [:div.col-md-8
    [:br]
    (c/input "First Name" :text :first-name)
    (c/input "Last Name" :text :last-name)
    (c/input "Email" :text :email)
    (c/input "Password" :password :pass)
    (c/input "Confirm" :password :pass2)]])

(defn not-valid? [user]
  (let [vmap (first (b/validate user
                                :first-name v/required
                                :last-name v/required
                                :email v/email
                                :pass [v/required [v/min-count 8]]
                                :pass2 v/required))]
    (if (nil? vmap)
      false
      vmap)))

(defn registration-resp [user]
  (fn [response]
    (let [status (:status-text response)]
      (get-app-users)
      (reset! user {})
      (cond
        (= "Success" status) (u/report-success (:message response))
        (= "Duplicate" status) (u/report-error "registration-resp"
                                               (:message response))
        :else (u/report-error "registration-resp" (:message response))))))

(defn post-user [user]
  (if (state/is-authenticated?)
    (ajax/post-it "post-user" "/admin/register" (dissoc @user :pass2)
                  (registration-resp user))
    (u/report-unauthenticated "post-user")))

(defn register-component []
  (let [user (atom {})]
    (fn []
      [:div
       [bind-fields register-template user]
       [:button.btn.btn-primary
        {:type "submit"
         :on-click (fn []
                     (if-let [e (not-valid? @user)]
                       (u/report-error "register-component"
                                       (u/validation-error-msg e))
                       (post-user user)))}
        "Register"]])))


