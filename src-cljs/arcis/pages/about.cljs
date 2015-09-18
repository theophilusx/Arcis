;;      Filename: about.cljs
;; Creation Date: Saturday, 04 July 2015 05:56 PM AEST
;; Last Modified: Friday, 18 September 2015 08:10 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.about
  (:require [reagent.session :as session]
            [arcis.pages.components :as c]
            [arcis.debug :as d]))

(defn about-page []
  [:div.container
   [c/page-header "About Arcis"]
   [:div.row
    [:div.col-md-12
     [c/status-component]
     (when-not (session/get-in [:user-data :token])
       [c/login-component])
     [d/state-keys]
     [d/render-state]]]])
