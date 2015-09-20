;;      Filename: register.cljs
;; Creation Date: Sunday, 19 April 2015 02:44 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:14 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.register
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [arcis.state :as state]
            [ajax.core :refer [GET POST]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.debug :as debug]
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
    (let [status (:status response)]
      (cond
        (= "success" status) (do
                               (get-app-users)
                               (u/report-success (:message response)))
        (= "duplicate" status) (do
                                 (get-app-users)
                                 (u/report-error (:message response)))
        :else (do
                (.log js/console (str "registration-resp: :else " status))
                (u/report-error (:message response)))))))

(defn post-user [user]
  (when (state/is-authenticated?)
    (let [params (assoc (u/default-post-params)
                        :params (dissoc @user :pass2)
                        :handler (registration-resp user)
                        :error-handler (u/default-error-response "post-user"))]
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
                       (u/report-error (u/validation-error-msg e))
                       (post-user user)))}
        "Register"]])))


