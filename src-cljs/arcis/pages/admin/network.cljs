;;      Filename: network.cljs
;; Creation Date: Saturday, 29 August 2015 11:58 AM AEST
;; Last Modified: Saturday, 10 October 2015 06:39 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.network
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.pages.components :as c]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(def add-network-template
  [:div.row
   [:div.col-md-8
    [:br]
    (c/input "Network Group" :text :group-name)
    (c/input "Subgroup" :text :subgroup-name)
    (c/input "Regular Expression" :text :group-regexp)]])

(defn not-valid? [group]
  (let [vmap (first (b/validate group
                                :group-name v/required
                                :subgroup-name v/required 
                                :group-regexp v/required))]
    (if (nil? vmap)
      false
      vmap)))

(defn group-list-to-hash [lst]
  (reduce (fn [m v]
            (assoc m (keyword (str (:group_name v) "-"
                                   (:subgroup_name v)))
                   {:group-name (:group_name v)
                    :subgroup-name (:subgroup_name v)
                    :group-regexp (:group_regexp v)
                    :active (:active v)
                    :created-dt (:created_dt v)
                    :last-modified-dt (:last_modified_dt v)}))
          (sorted-map) lst))

(defn process-network-groups [response]
  (let [group-hash (group-list-to-hash response)]
    (state/set-value-in! [:admin :network-groups] group-hash)))

(defn get-network-groups []
  (if (state/is-authenticated?)
    (ajax/get-it "get-network-groups" "/admin/groups"
                 #'process-network-groups)
    (u/report-unauthenticated "get-network-groups")))

(defn network-group-add [response]
  (get-network-groups))

(defn post-network-group [group]
  (if (state/is-authenticated?)
    (ajax/post-it "post-network-group" "/admin/add-network" @group
                  #'network-group-add)
    (u/report-unauthenticated "post-network-group")))

(defn group-table-row [grp]
  [:tr
   [:td (:group-name grp)]
   [:td (:subgroup-name grp)]
   [:td (:group-regexp grp)
    [:button [:span {:class "fa fa-pencil"}]]]
   [:td (:active grp)]
   [:td (:created-dt grp)]
   [:td (:last-modified-dt grp)]
   [:td [:button {:class "btn btn-primary"} [:span {:class "fa fa-pencil"}]] " "
    [:button {:class "btn btn-danger"} [:span {:class "fa fa-trash-o"}]]]])

(defn network-group-table []
  (let [groups (state/value-in [:admin :network-groups])]
    [:div
     [:table.table.table-striped
      [:thead
       [:tr
        [:th "Group Name"]
        [:th "Sub-group Name"]
        [:th "Regular Expression"]
        [:th "Active?"]
        [:th "Created"]
        [:th "Last Modified"]
        [:th " "]]]
      [:tbody
       (for [g (keys groups)]
         ^{:key g} [group-table-row (g groups)])]]
     [:button.btn.btn-primary
      {:type "button" :on-click #(get-network-groups)}
      "Refresh"]]))

(defn add-network-group-component []
  (let [network-group (atom {})]
    (fn []
      [:div
       [bind-fields add-network-template network-group]
       [:button.btn.btn-primary
        {:type "submit"
         :on-click (fn []
                     (if-let [e (not-valid? @network-group)]
                       (u/report-error "add-network-group-component"
                                       (u/validation-error-msg e))
                       (post-network-group network-group)))}
        "Add Group"]])))

(defn network-component []
  [:div
   [network-group-table]
   [:hr]
   [add-network-group-component]])
