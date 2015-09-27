;;      Filename: components.cljs
;; Creation Date: Sunday, 26 April 2015 10:08 AM AEST
;; Last Modified: Sunday, 27 September 2015 03:05 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.components
  (:require [reagent.core :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [arcis.state :as state]
            [ajax.core :refer [GET POST]]
            [arcis.utils :as u]
            [secretary.core :as secretary]))

(defn page-header
  "Simple page header component."
  [title & sub-title]
  [:div.row
   [:div.page-header
    [:h1.text-primary title]
    (if sub-title
      [:h2.text-primary sub-title])]])

(defn row
  "Create an input row with supplied label and field definition"
  [label field]
  [:div.row
   [:div.form-group
    [:div.col-md-4.[:label {:class "pull-right"} label]]
    [:div.col-md-8 field]]])

(defn input
  "Input field component"
  [label type id]
  (row label [:input.form-control {:field type :id id}]))

(defn render-vec
  "Vector display component. Will render vector as an un-ordered list"
  [v]
  [:ul
   (for [i v]
     ^{:key i} [:li (str i)])])

(defn render-map
  "Map display component. Will render a map as a table with keys as 
  header elements and values as data elements"
  [m]
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

(defn menu-item-component
  "Render a menu item component where f is the function to be called when
the menu item is selected. The function will be called with the arguments
k and i. The menu item will have i as its text"
  [k i f]
  [:li {:role "presentation"}
   [:a {:role "menuitem" :on-click #(f k i)} i]])

(defn menu-component
  "A drop-down menu component where
record-key is the unique key for the record
curr-val is the current value for the field
field-id is the menu button id
action-fn is a function which takes two arguments, the record-key and 
selected item
items-vec is a vector of menu items"
  [record-key curr-val field-id action-fn items-vec]
  [:div.dropdown
   [:button.btn.btn-primary.dropdown-toggle.btn-block
    {:type "button"
     :id field-id
     :data-toggle "dropdown"}
    curr-val " " [:span {:class "caret"}]]
   [:ul {:role "menu" :class "dropdown-menu"}
    (for [i items-vec]
      ^{:key i} [menu-item-component record-key i action-fn])]])

(defn toggle-button-component
  "Toggle button component where
record-id is the unique record id associated witht he button
cur-val is the current value of the button and should e true or false
acton-fn is an action function called when the button is clicked. The 
function takes two values, the record-key and the compliment of the curr-val
An optional t-f-map can be provided to alter the text used in the button. The
default are the string True and False. Map should have two keys :true and
:false, which should map to strings to represent those values"
  [record-key curr-val action-fn & t-f-map]
  (let [true-false-map (or (first t-f-map) {:true "True" :false "False"})]
    [:button {:class (str "btn btn-block" (if curr-val
                                            " btn-success"
                                            " btn-danger"))
              :type "button"
              :on-click #(action-fn record-key (not curr-val))}
     (if curr-val
       (:true true-false-map)
       (:false true-false-map))]))

(defn inline-text-field-component [record-id action-fn]
  (let [field-data (atom {:id record-id
                          :value nil})]
    (fn [record-id action-fn]
      (swap! field-data assoc-in [:id] record-id)
      [:div.form-inline
       [:input {:class "form-control"
                :type "text"
                :value (:value @field-data)
                :on-change #(swap! field-data assoc-in [:value]
                                   (-> % .-target .-value))}]
       [:button {:class "btn btn-primary"
                 :type "button"
                 :on-click #(action-fn field-data)}
        "Update"]])))

(def status-type-map {:error "alert-danger"
                      :warning "alert-warning"
                      :success "alert-success"
                      :expired "alert-danger"})





(defn status-component []
  (let [status-type (state/value-in [(state/this-page) :status :type])]
    (when (contains? #{:error :warning :success :expired} status-type)
      [:div.row
       [:div.col-md-12
        [:div {:class (str "alert " (status-type status-type-map))
               :role "alert"}
         (state/value-in [(state/this-page) :status :msg])]]])))
