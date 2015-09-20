;;      Filename: network.cljs
;; Creation Date: Saturday, 29 August 2015 11:58 AM AEST
;; Last Modified: Sunday, 20 September 2015 06:55 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.network
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [arcis.state :as state]
            [arcis.ajax :as ajax]
            [ajax.core :refer [GET POST]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.pages.components :as c]
            [arcis.utils :as u]))

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
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-get-params)
                        :handler (ajax/default-handler "get-network-groups"
                                   #'process-network-groups false)
                        :error-handler (ajax/default-error-handler
                                         "get-network-groups"))]
      (GET "/admin/groups" params))))

(defn network-group-add [response]
  (get-network-groups))

(defn post-network-group [group]
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-post-params)
                        :params @group
                        :handler (ajax/default-handler "post-network-group"
                                   #'network-group-add true)
                        :error-handler (ajax/default-error-handler
                                         "post-network-group"))]
      (POST "/admin/add-network" params))))

(defn group-table-row [grp]
  [:tr
   [:td (:group-name grp)]
   [:td (:subgroup-name grp)]
   [:td (:group-regexp grp)]
   [:td (:active grp)]
   [:td (:created-dt grp)]
   [:td (:last-modified-dt grp)]])

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
        [:th "Last Modified"]]]
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
