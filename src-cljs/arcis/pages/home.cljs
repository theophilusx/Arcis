;;      Filename: home.cljs
;; Creation Date: Saturday, 04 July 2015 05:27 PM AEST
;; Last Modified: Friday, 18 September 2015 08:06 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.home
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.debug :as d]))


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
          [c/login-component])]
       [:div.row
        [:ul
         [:li (str "Hello " (session/get-in [:user-data :first_name]))]
         [:li (str "Your email is " (session/get-in [:user-data :email]))]
         [:li (str "Your role is "
                   (session/get-in [:user-data :user_role]))]]]]]]))
