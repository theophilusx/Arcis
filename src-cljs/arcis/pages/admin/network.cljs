;;      Filename: network.cljs
;; Creation Date: Saturday, 29 August 2015 11:58 AM AEST
;; Last Modified: Friday, 04 September 2015 12:28 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.network
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [reagent.session :as session]
            [ajax.core :refer [GET POST]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.debug :as debug]
            [arcis.pages.components :as c]
            [arcis.utils :as u]))

(def add-network-template
  [:div.row
   [:div.col-md-8
    [:br]
    (c/input "Network Group" :text :group-name)
    (c/input "Regular Expression" :text :group-regexp)]])

(defn not-valid? [group]
  (let [vmap (first (b/validate group
                                :group-name v/required
                                :group-regexp v/required))]
    (if (nil? vmap)
      false
      vmap)))

(defn group-list-to-hash [lst]
  (reduce (fn [m v]
            (assoc m (keyword (get v "group_name"))
                   {:group-name (get v "group_name")
                    :group-regexp (get v "group_regexp")
                    :active (get v "active")
                    :created-dt (get v "created_dt")
                    :last-modified-dt (get v "last_modified_dt")}))
          {} lst))

(defn network-groups-resp [response]
  (let [group-list (js->clj response :keywordize-keys true)
        group-hash (group-list-to-hash group-list)]
    (.log js/console (str "GL: " group-list))
    (.log js/console (str "NGR: " group-hash))
    (session/assoc-in! [(u/this-page) :network-groups] group-hash)))

(defn network-groups-error-resp [ctx]
  (let [rsp (js->clj {:response ctx} :keywordize-keys true)
        msg (str "Error: " (:status ctx) " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "network-groups-error-rsp AJAX error: " ctx))
    (if (u/expired-session? (:status ctx) (:status-text ctx))
      (u/report-expired-session)
      (u/report-error msg))))

(defn get-network-groups []
  (.log js/console "Calling get-network-groups")
  (GET "/admin/groups" {:format :json
                        :handler network-groups-resp
                        :error-handler network-groups-error-resp}))

(defn add-network-resp [grop]
  (fn [response]
    (let [rsp (js->clj response :keywordize-keys true)
          status (:status rsp)]
      (cond
        (= "success" status) (do
                               (get-network-groups)
                               (u/report-success (:message rsp)))
        (= "duplicate" status) (do
                                 (get-network-groups)
                                 (u/report-error (:message rsp)))
        :else (do
                (.log js/console (str "add-network-resp: :else " status))
                (u/report-error (:message rsp)))))))

(defn add-network-error-resp [group]
  (fn [ctx]
    (let [rsp (js->clj (:response ctx) :keywordize-keys true)
          msg (str "AJAX Error: " (:status ctx) " "
                   (:status-text ctx) " "
                   (:message rsp))]
      (.log js/console (str "add-network-error-resp: " ctx))
      (if (u/expired-session? (:status ctx) (:status rsp))
        (u/report-expired-session)
        (u/report-error msg)))))

(defn post-network-group [group]
  (let [params (assoc (u/default-post-params)
                      :params @group
                      :handler (add-network-resp group)
                      :error-handler (add-network-error-resp group))]
    (.log js/console (str "Params: " params))
    (POST "/admin/add-network" params)))

(defn group-table-row [grp]
  [:tr
   [:td (:group-name grp)]
   [:td (:group-regexp grp)]
   [:td (:active grp)]
   [:td (:created-dt grp)]
   [:td (:last-modified-dt grp)]])

(defn network-group-table []
  (let [groups (session/get-in [(u/this-page) :network-groups])]
    (.log js/console (str "NG: " groups))
    [:div
     [:table.table.table-striped
      [:thead
       [:tr
        [:th "Group Name"]
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
  (if-not (session/get-in [(u/this-page) :network-groups])
    (get-network-groups))
  [:div
   [network-group-table]
   [:hr]
   [add-network-group-component]])
