;;      Filename: debug.cljs
;; Creation Date: Sunday, 03 May 2015 05:47 PM AEST
;; Last Modified: Sunday, 03 May 2015 05:50 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.debug
  (:require [reagent.cookies :as cookie]
            [reagent.session :as session]
            [arcis.pages.components :as c]))

(defn dump-cookies [] 
  [:div
   [:h3 (str "Cookie Keys: " (cookie/count))]
   (if-let [ks (remove #{:arcis-session} (cookie/keys))]
     [:table.table.table-striped
      (for [k ks]
        ^{:key k} [:tr [:th (str k)] [:td (str (cookie/get k))]])])])

(defn render-state []
  (let [smap (dissoc @session/state :current-page :nav)]
    [:div
     [:h4 "Arcis Current State"]
     (if (not (empty? smap))
       (c/render-map smap)
       [:p "No additional state values to display"])]))

(defn state-keys []
  (let [ks (keys @session/state)]
    [:div
     [:h4 "Current state keys"]
     [:ul
      (for [k ks]
        ^{:key k} [:li (str k)])]]))
