;;      Filename: sidebar.cljs
;; Creation Date: Sunday, 20 September 2015 02:47 PM AEST
;; Last Modified: Sunday, 20 September 2015 03:00 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.sidebar
  (:require [arcis.state :as state]))

(defn get-active-item []
  (state/value-in [(state/this-page) :sidebar]))

(defn set-active-item! [m]
  (state/set-value-in! [(state/this-page) :sidebar] m))

(defn is-item-active [m]
  (if (= m (get-active-item))
    true
    false))


(defn menu-role [m]
  (if (is-item-active m)
    {:role "presentation" :class "active"}
    {:role "presentation"}))

(defn menu-item [m]
  [:li (menu-role m)
   [:a {:on-click #(set-active-item! m)} (name m)]])

(defn sidebar-menu-component [menu-items]
  (into [:u1.nav.nav-pills.nav-stacked]
        (for [i menu-items]
          ^{:key i} (menu-item i))))
