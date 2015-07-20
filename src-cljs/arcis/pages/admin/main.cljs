;;      Filename: main.cljs
;; Creation Date: Friday, 10 July 2015 03:54 PM AEST
;; Last Modified: Monday, 20 July 2015 06:16 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.main
  (:require [reagent.session :as session]
            [reagent-modals.modals :as modals]
            [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.pages.admin.users :refer [users-component]]
            [arcis.pages.admin.register :refer [register-component]]))


(defn admin-page []
  (if-not (u/active-tab)
    (u/set-active-tab 1))
  (fn []
    [:div.container
     [c/page-header "User Administration"]
     [modals/modal-window]
     [:div.row
      [:div.col-md-12
       [c/status-component]
       [:div.row
        [:ul {:class "nav nav-tabs"}
         [:li {:role "presentation" :class (u/get-tab-state 1)}
          [:a {:on-click #(u/set-active-tab 1)} "Users"]]
         [:li {:role "presentation" :class (u/get-tab-state 2)}
          [:a {:on-click #(u/set-active-tab 2)} "Register"]]]
        (if (= 1 (u/active-tab))
          [users-component]
          [register-component])]]]]))
