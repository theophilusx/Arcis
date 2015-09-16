;;      Filename: home.cljs
;; Creation Date: Saturday, 04 July 2015 05:27 PM AEST
;; Last Modified: Wednesday, 16 September 2015 07:01 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.home
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [reagent.session :as session]
            [ajax.core :refer [POST]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.debug :as d]))

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
    (let [rsp (js->clj response :keywordize-keys true)]
      (.log js/console (str "login-resp: " rsp))
      (session/put! :user-data rsp)
      (u/report-success)
      (reset! user {}))))

(defn post-login [data]
  (.log js/console (str "Login Data: " @data))
  (let [params (assoc (u/default-post-params)
                      :params @data
                      :handler (login-resp data)
                      :error-handler (u/default-error-response "post-login"))]
    (POST "/login" params)))

(defn login-component []
  (let [user (atom {})]
    (fn []
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
       [:hr]])))

(defn home-page []
  (fn []
    [:div.container
     [c/page-header [:img {:src "/img/logo_web1.png" :class "image-responsive"}]
      "Welcome to Arcis"]
     [:div.row
      [:div.col-md-12
       [c/status-component]
       [:div.row
        (when-not (session/get-in [:user-data :token])
          [login-component])]
       [:div.row
        [:ul
         [:li (str "Hello " (session/get-in [:user-data :first_name]))]
         [:li (str "Your email is " (session/get-in [:user-data :email]))]
         [:li (str "Your role is "
                   (session/get-in [:user-data :user_role]))]]]]]]))
