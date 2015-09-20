;;      Filename: main.cljs
;; Creation Date: Friday, 10 July 2015 03:54 PM AEST
;; Last Modified: Sunday, 20 September 2015 02:01 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.main
  (:require [arcis.state :as state]
            [reagent-modals.modals :as modals]
            [arcis.pages.components :as c]
            [arcis.pages.tabs :as tabs]
            [arcis.pages.login :refer [login-component]]
            [arcis.utils :as u]
            [arcis.pages.admin.users :refer [users-component]]
            [arcis.pages.admin.register :refer [register-component]]
            [arcis.pages.admin.network :refer [network-component]]))


(defn admin-page []
  (if-not (tabs/active-tab)
    (tabs/set-active-tab! "Users"))
  (fn []
    [:div.container
     [c/page-header "Administration"]
     [modals/modal-window]
     [:div.row
      [:div.col-md-12
       [c/status-component]]]
     (when-not (state/is-authenticated?)
       [login-component])
     [:div.row
      (tabs/tab-component ["Users" "Register" "Network Groups"])
      (condp = (tabs/active-tab)
        "Users" [users-component]
        "Register" [register-component]
        "Network Groups" [network-component])]]))
