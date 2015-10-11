;;      Filename: network_state.cljs
;; Creation Date: Sunday, 11 October 2015 10:39 AM AEDT
;; Last Modified: Sunday, 11 October 2015 05:28 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.network-state
  (:require [arcis.utils :as u]
            [arcis.pages.admin.network-ajax :refer [get-network-groups]]
            [arcis.ajax :as ajax]
            [arcis.state :as state]))

(defn y-or-n-toggle [val]
  (if (or (= val "Y") (= val "y"))
    "N"
    "Y"))

(defn y-or-n-text [val]
  (if (or (= val "Y") (= val "y"))
    "Yes"
    "No"))

(defn process-state-change [response]
  (u/report-success)
  (get-network-groups))

(defn update-state [grp sub-grp state]
  (if (state/is-authenticated?)
    (ajax/post-it "update-state" "/admin/network-state"
                  {:group_name grp
                   :subgroup_name sub-grp
                   :active state} #'process-state-change)
    (u/report-unauthenticated "update-state")))

(defn group-state-component [grp sub-grp state]
  (let [state-txt (y-or-n-text state)]
    [:div
     [:button {:class (str "btn btn-block "
                           (if (or (= state "Y") (= state "y"))
                             "btn-success"
                             "btn-danger"))
               :on-click #(update-state grp sub-grp (y-or-n-toggle state))}
      (y-or-n-text state)]]))
