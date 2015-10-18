;;      Filename: login.cljs
;; Creation Date: Sunday, 20 September 2015 01:37 PM AEST
;; Last Modified: Sunday, 18 October 2015 06:26 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.login
  (:require [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.admin.network-ajax :refer [get-network-groups]]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.pages.hosts.host-utils :refer [get-host-list]]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(def login-template
  [:div.form-horizontal
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
    (reset! user {})
    (get-app-users)
    (get-network-groups)
    (get-host-list)))

(defn post-login [data]
  (ajax/post-it "post-login" "/login" @data (login-resp data)))

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
                        (u/report-error "login-component"
                                        (u/validation-error-msg e))
                        (post-login user)))}
         "Login"]
        [:p]
        [:hr]]])))
