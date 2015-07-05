;;      Filename: about.cljs
;; Creation Date: Saturday, 04 July 2015 05:56 PM AEST
;; Last Modified: Saturday, 04 July 2015 06:03 PM AEST
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
     [c/expired-component]
     [d/state-keys]
     [d/render-state]]]])
