;;      Filename: register.cljs
;; Creation Date: Sunday, 19 April 2015 02:44 PM AEST
;; Last Modified: Sunday, 20 September 2015 05:19 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.register
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [arcis.state :as state]
            [ajax.core :refer [GET POST]]
            [arcis.ajax :as ajax]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.utils :as u]))

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
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-post-params)
                        :params (dissoc @user :pass2)
                        :handler (registration-resp user)
                        :error-handler (ajax/default-error-handler
                                         "post-user"))]
      (POST "/admin/register" params))))


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


