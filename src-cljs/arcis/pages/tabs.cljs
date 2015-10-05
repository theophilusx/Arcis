;;      Filename: tabs.cljs
;; Creation Date: Sunday, 20 September 2015 12:25 PM AEST
;; Last Modified: Monday, 05 October 2015 02:46 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.tabs
  (:require [arcis.state :as state]))

(defn get-active []
  (state/value-in [(state/this-page) :tab :current]))

(defn set-active! [v]
  (state/set-value-in! [(state/this-page) :tab :current] v))

(defn is-active? [t]
  (= t (get-active)))

(defn tab-role [t]
  (if (is-active? t)
    {:role "presentation" :class "active"}
    {:role "presentation"}))

(defn tab-item [t]
  [:li (tab-role t)
   [:a {:on-click #(set-active! t)} (name t)]])

(defn tab-component [tab-list]
  (into [:ul.nav.nav-tabs]
        (for [t tab-list]
          ^{:key t} [tab-item t])))
