;;      Filename: user_state.cljs
;; Creation Date: Wednesday, 08 July 2015 02:28 PM AEST
;; Last Modified: Friday, 25 September 2015 10:11 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-state
  (:require [arcis.utils :as u]
            [arcis.ajax :as ajax]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.pages.components :as c]
            [arcis.state :as state]))

(defn process-state-change [response]
  (get-app-users))

(defn handle-state-change [id val]
  (if (state/is-authenticated?)
    (ajax/post-it "handle-state-change" "/admin/state"
                  {:id id :active-state val} #'process-state-change)
    (u/report-unauthenticated "handle-state-change")))

(defn user-state-button [id v]
  (c/toggle-button-component id v #'handle-state-change
                             {:true "Yes" :false "No"}))
