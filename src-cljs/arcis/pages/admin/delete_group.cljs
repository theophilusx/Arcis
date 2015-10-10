;;      Filename: delete_group.cljs
;; Creation Date: Sunday, 11 October 2015 09:29 AM AEDT
;; Last Modified: Sunday, 11 October 2015 10:23 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.delete-group
  (:require [arcis.utils :as u]
            [arcis.pages.admin.network-ajax :refer [get-network-groups]]
            [arcis.ajax :as ajax]
            [arcis.state :as state]
            [reagent-modals.modals :as modals]))

(defn process-delete [response]
  (get-network-groups)
  (u/report-success (:message response)))

(defn delete-group [grp sub-grp]
  (if (state/is-authenticated?)
    (ajax/post-it "delete-group" "/admin/delete-network"
                  {:group_name grp :subgroup_name sub-grp}
                  #'process-delete)
    (u/report-unauthenticated "delete-group")))

(defn delete-group-modal [grp sub-grp]
  (let [grp-key (keyword (str grp "-" sub-grp))]
    [:div
     [:div.modal-header
      [modals/close-button]
      [:h4 {:class "modal-title"} "Delete Network Group"]]
     [:div.modal-body
      [:p (str grp " " sub-grp)]
      [:p "Are you sure you want to permanently delete this network group?"]]
     [:div.modal-footer
      [:button.btn.btn-default {:data-dismiss "modal"} "Cancel"]
      [:button.btn.btn-danger
       {:data-dismiss "modal" :on-click #(delete-group grp sub-grp)}
       "Delete!"]]]))

(defn delete-group-button [grp sub-grp]
  [:div.btn.btn-danger {:on-click #(modals/modal!
                                    (delete-group-modal grp sub-grp))}
   [:span {:class "fa fa-trash"}]])
