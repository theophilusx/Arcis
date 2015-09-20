;;      Filename: home.cljs
;; Creation Date: Saturday, 04 July 2015 05:27 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:48 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.home
  (:require [reagent.core :as reagent :refer [atom]]
            [arcis.state :as state]
            [arcis.pages.components :as c]
            [arcis.pages.login :refer [login-component]]
            [arcis.utils :as u]
            [arcis.debug :as d]))


(defn home-page []
  (fn []
    [:div.container
     [c/page-header [:img {:src "/img/logo_web1.png" :class "image-responsive"}]
      "Welcome to Arcis"]
     [:div.row
      [:div.col-md-12
       [c/status-component]]]
     (when-not (state/is-authenticated?)
       [login-component])
     [:div.row
      [:div.col-md-12
       [:ul
        [:li (str "Hello " (state/value-in [:user-data :first_name]))]
        [:li (str "Your email is " (state/value-in [:user-data :email]))]
        [:li (str "Your role is "
                  (state/value-in [:user-data :user_role]))]
        [:li (str "Are you authenticated? " (state/is-authenticated?))]]]]]))
