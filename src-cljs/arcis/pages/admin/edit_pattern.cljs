;;      Filename: edit_pattern.cljs
;; Creation Date: Sunday, 11 October 2015 07:13 AM AEDT
;; Last Modified: Sunday, 11 October 2015 08:50 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.edit-pattern
  (:require [reagent.core :as r :refer [atom]]
            [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.pages.components :as c]
            [arcis.pages.admin.network-ajax :refer [get-network-groups]]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(defn cancel-edit-pattern [data]
  (let [grp-key (keyword (str (:group_name @data) "-" (:subgroup_name @data)))]
    (state/set-value-in! [(state/this-page) :network-groups
                          grp-key :edit-regexp] false)))

(defn update-response [data]
  (fn [response]
    (get-network-groups)
    (u/report-success (:message response))
    (reset! data {})))

(defn update-pattern [data]
  (if (state/is-authenticated?)
    (let [grp-key (keyword (str (:group_name @data) "-"
                                (:subgroup_name @data)))]
      (ajax/post-it "update-pattern" "/admin/network-pattern"
                    {:group_name (:group_name @data)
                     :subgroup_name (:subgroup_name @data)
                     :group_regexp (:value @data)}
                    (update-response data))
      (state/set-value-in! [(state/this-page) :network-groups
                            grp-key :edit-regexp] false))))

(defn pattern-edit-component [grp sub-grp value]
  (let [data (atom {})]
    (fn [grp sub-grp value]
      (swap! data assoc :group_name grp :subgroup_name sub-grp :value value)
      [c/inline-text-field-component data #'update-pattern
       #'cancel-edit-pattern])))

(defn pattern-link-component [grp sub-grp value]
  [:div
   value [:a {:class "pull-right"
              :on-click #(state/set-value-in! [(state/this-page) :network-groups
                                              (keyword (str grp "-" sub-grp))
                                               :edit-regexp] true)}
          [:span {:class "fa fa-pencil"}]]])

(defn pattern-component [grp sub-grp value]
  (if (state/value-in [(state/this-page) :network-groups
                       (keyword (str grp "-" sub-grp)) :edit-regexp])
    [pattern-edit-component grp sub-grp value]
    [pattern-link-component grp sub-grp value]))
