;;      Filename: tabs.cljs
;; Creation Date: Sunday, 20 September 2015 12:25 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:55 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.tabs
  (:require [arcis.state :as state]))

(defn active-tab []
  (state/value-in [(state/this-page) :tab]))

(defn set-active-tab! [v]
  (state/set-value-in! [(state/this-page) :tab] v)
  (state/set-value-in! [(state/this-page) :status :type] :ignore))

(defn is-active-tab [t]
  (= t (active-tab)))

(defn tab-role [t]
  (if (is-active-tab t)
    {:role "presentation" :class "active"}
    {:role "presentation"}))

(defn tab-item [t]
  [:li (tab-role t)
   [:a {:on-click #(set-active-tab! t)} (name t)]])

(defn tab-component [tab-list]
  (into [:ul.nav.nav-tabs]
        (for [t tab-list]
          ^{:key t} (tab-item t))))
