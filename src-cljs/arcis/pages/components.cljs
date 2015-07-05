;;      Filename: components.cljs
;; Creation Date: Sunday, 26 April 2015 10:08 AM AEST
;; Last Modified: Saturday, 04 July 2015 05:58 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.components
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary]))

(defn expired-component []
  (if (session/get :expired)
    [:div {:class "alert alert-danger" :role "alert"}
     [:h2 "Session Expired!"]
     [:p "Your session has expired. Please "
      [:a {:href "/login"} "sign in"] " to continue"]]))

(defn page-header [title & sub-title]
  [:div.jumbotron
   [:h1 title]
   (if sub-title
     [:p sub-title])])

(defn row [label field]
  [:div.row
   [:div.form-group
    [:div.col-md-4.[:label {:class "pull-right"} label]]
    [:div.col-md-8 field]]])

(defn input [label type id]
  (row label [:input.form-control {:field type :id id}]))

(defn sidebar []
  [:div.col-sm-3.col-md-2.sidebar
   [:ul.nav.nav-sidebar
    [:li {:class (when (= :admin (session/get :page)) "active")}
     [:a {:on-click #(secretary/dispatch! "#/admin")} "Overview"
      [:span.sr-only "(current)"]]]
    [:li {:class (when (= :users (session/get :page)) "active")}
     [:a {:on-click #(secretary/dispatch! "#/users")} "Users"]]
    [:li {:class (when (= :register (session/get :page)) "active")}
     [:a {:on-click #(secretary/dispatch! "#/register")} "Register User"]]]])

(defn render-vec [v]
  [:ul
   (for [i v]
     ^{:key i} [:li (str i)])])

(defn render-map [m]
  (let [ks (keys m)]
    [:table.table.table-condensed 
     (for [k ks]
       ^{:key k} [:tr
                  [:th (str k)]
                  [:td (let [c (get m k)]
                         (cond
                           (vector? c) (render-vec c)
                           (map? c) (render-map c)
                           :else (str c)))]])]))

(defn menu-item-component [k i f]
  [:li {:role "presentation"}
   [:a {:role "menuitem" :href "#" :on-click (fn [] (f k i))} i]])

(defn menu-component [k v id f items]
  [:div.dropdown
   [:button.btn.btn-primary.dropdown-toggle.btn-block
    {:type "button"
     :id id
     :data-toggle "dropdown"}
    v " " [:span {:class "caret"}]]
   [:ul {:role "menu" :class "dropdown-menu"}
    (for [i items]
      ^{:key i} [menu-item-component k i f])]])

(defn danger-component []
  (if-let [msg (session/get :error)]
    [:div {:class "alert alert-danger" :role "alert"} msg]))

(defn status-component []
  (if-let [msg (session/get :status)]
    [:div {:class "alert alert-success" :role "alert"} msg]))

