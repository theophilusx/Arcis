;;      Filename: login.cljs
;; Creation Date: Sunday, 20 September 2015 01:37 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:44 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.login
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.pages.components :as c]))

(def login-template
  [:div
   [:h2 {:class "form-signin-heading"} "Please sign in"]
   [:hr]
   (c/input "Email" :text :email)
   (c/input "Password" :password :pass)])

(defn not-valid? [user]
  (let [vmap (first (b/validate user
                                :email v/email
                                :pass [v/required [v/min-count 8]]))]
    (if (nil? vmap)
      false
      vmap)))

(defn login-resp [user]
  (fn [response]
    (state/set-value! :user-data response)
    (u/report-success)
    (reset! user {})))

(defn post-login [data]
  (let [params (assoc (u/default-post-params)
                      :params @data
                      :handler (login-resp data)
                      :error-handler (u/default-error-response "post-login"))]
    (POST "/login" params)))

(defn login-component []
  (let [user (atom {})]
    (fn []
      [:div.row
       [:div.col-md-8
        [bind-fields login-template user]
        [:button.btn.btn-primary
         {:type "button"
          :on-click (fn []
                      (if-let [e (not-valid? @user)]
                        (u/report-error (u/validation-error-msg e))
                        (post-login user)))}
         "Login"]
        [:p]
        [:hr]]])))
