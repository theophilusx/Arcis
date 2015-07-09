;;      Filename: components.cljs
;; Creation Date: Sunday, 26 April 2015 10:08 AM AEST
;; Last Modified: Wednesday, 08 July 2015 02:03 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.components
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary]))

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

(def status-type-map {:error "alert-danger"
                      :warning "alert-warning"
                      :success "alert-success"
                      :expired "alert-danger"})

(defn status-component []
  (let [status-type (session/get-in [(session/get :page) :status :type])]
    (when (contains? #{:error :warning :success :expired} status-type)
      [:div {:class (str "alert " (status-type status-type-map)) :role "alert"}
       (session/get-in [(session/get :page) :status :msg])])))



