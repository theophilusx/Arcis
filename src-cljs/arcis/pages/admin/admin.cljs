;;      Filename: admin.cljs
;; Creation Date: Friday, 10 July 2015 03:54 PM AEST
;; Last Modified: Saturday, 11 July 2015 07:25 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.admin
  (:require [reagent.session :as session]
            [reagent-modals.modals :as modals]
            [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.pages.admin.users :refer [users-component]]
            [arcis.pages.admin.register :refer [register-component]]))

(defn active-tab []
  (session/get-in [(session/get :page) :tab]))

(defn set-active-tab [v]
  (session/assoc-in! [(session/get :page) :tab] v)
  (session/assoc-in! [(session/get :page) :status :type] :ignore))

(defn admin-page []
  (if-not (active-tab)
    (set-active-tab 1))
  (fn []
    [:div.container
     [c/page-header "User Administration"]
     [modals/modal-window]
     [:div.row
      [:div.col-md-12
       [c/status-component]
       [:div.row
        [:ul {:class "nav nav-tabs"}
         [:li {:role "presentation" :class (if (= 1 (active-tab)) "active" "")}
          [:a {:on-click #(set-active-tab 1)} "Users"]]
         [:li {:role "presentation" :class (if (= 2 (active-tab)) "Active" "")}
          [:a {:on-click #(set-active-tab 2)} "Register"]]]
        (if (= 1 (active-tab))
          [users-component]
          [register-component])]]]]))
