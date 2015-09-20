;;      Filename: network.cljs
;; Creation Date: Saturday, 29 August 2015 11:58 AM AEST
;; Last Modified: Sunday, 20 September 2015 02:09 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.network
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [arcis.state :as state]
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

(defn network-groups-resp [response]
  (let [group-hash (group-list-to-hash response)]
    (state/set-value-in! [(state/this-page) :network-groups] group-hash)))

(defn get-network-groups []
  (when (state/is-authenticated?)
    (let [token (state/value-in [:user-data :token])]
      (GET "/admin/groups" {:format :json
                            :response-format :json
                            :keywords? true
                            :headers {"Authorization" (str "Token " token)}
                            :handler network-groups-resp
                            :error-handler (u/default-error-response
                                             "get-network-groups")}))))

(defn add-network-resp [grop]
  (fn [response]
    (let [status (:status response)]
      (cond
        (= "success" status) (do
                               (get-network-groups)
                               (u/report-success (:message response)))
        (= "duplicate" status) (do
                                 (get-network-groups)
                                 (u/report-error (:message response)))
        :else (do
                (.log js/console (str "add-network-resp: :else " status))
                (u/report-error (:message response)))))))

(defn post-network-group [group]
  (when (state/is-authenticated?)
    (let [token (state/value-in [:user-data :token])
          params (assoc (u/default-post-params)
                        :params @group

                        :handler (add-network-resp group)
                        :error-handler (u/default-error-response
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
  (let [groups (state/value-in [(state/this-page) :network-groups])]
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
                       (u/report-error (u/validation-error-msg e))
                       (post-network-group network-group)))}
        "Add Group"]])))

(defn network-component []
  (if-not (state/value-in [(state/this-page) :network-groups])
    (get-network-groups))
  [:div
   [network-group-table]
   [:hr]
   [add-network-group-component]])
