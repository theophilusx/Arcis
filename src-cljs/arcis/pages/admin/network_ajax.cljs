;;      Filename: network_ajax.cljs
;; Creation Date: Sunday, 11 October 2015 08:43 AM AEDT
;; Last Modified: Sunday, 11 October 2015 08:47 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.network-ajax
  (:require [arcis.state :as state]
            [arcis.ajax :as ajax]
            [arcis.utils :as u]
            [arcis.pages.components :as c]))

(defn group-list-to-hash [lst]
  (reduce (fn [m v]
            (assoc m (keyword (str (:group_name v) "-"
                                   (:subgroup_name v)))
                   {:group-name (:group_name v)
                    :subgroup-name (:subgroup_name v)
                    :group-regexp (:group_regexp v)
                    :active (:active v)
                    :created-dt (:created_dt v)
                    :last-modified-dt (:last_modified_dt v)
                    :edit-regexp false}))
          (sorted-map) lst))

(defn process-network-groups [response]
  (let [group-hash (group-list-to-hash response)]
    (state/set-value-in! [(state/this-page) :network-groups] group-hash)))

(defn get-network-groups []
  (if (state/is-authenticated?)
    (ajax/get-it "get-network-groups" "/admin/groups"
                 #'process-network-groups)
    (u/report-unauthenticated "get-network-groups")))
