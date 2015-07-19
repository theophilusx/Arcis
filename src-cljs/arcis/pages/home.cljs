;;      Filename: home.cljs
;; Creation Date: Saturday, 04 July 2015 05:27 PM AEST
;; Last Modified: Saturday, 18 July 2015 07:07 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.home
  (:require [reagent.session :as session]
            [arcis.pages.components :as c]
            [arcis.debug :as d]))

(defn home-page []
  [:div.container
   [c/page-header [:img {:src "/img/logo_web1.png" :class "image-responsive"}]
    "Welcome to Arcis"]
   [:div.row
    [:div.col-md-12
     [c/status-component]
     [d/dump-cookies]
     [:ul
      [:li (str "Hello " (session/get-in [:user-data :first-name]))]
      [:li (str "Your email address is " (session/get-in [:user-data :email]))]
      [:li (str "Your role is " (session/get-in [:user-data :role]))]]
     [:h3 "Session Value for :user-data"]
     [:p (str (session/get :user-data))]]]])
