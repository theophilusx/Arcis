;;      Filename: hosts.cljs
;; Creation Date: Monday, 20 July 2015 05:35 PM AEST
;; Last Modified: Monday, 20 July 2015 06:20 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.main
  (:require [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.pages.hosts.list :refer [host-list-component]]
            [arcis.pages.hosts.upload :refer [host-upload-component]]))

(defn hosts-page []
  (if-not (u/active-tab)
    (u/set-active-tab 1))
  (fn []
    [:div.container
     [c/page-header "Hosts"]
     [:div.row
      [:div.col-md-12
       [c/status-component]
       [:div.row
        [:ul.nav.nav-tabs
         [:li {:role "presentation" :class (u/get-tab-state 1)}
          [:a {:on-click #(u/set-active-tab 1)} "Host List"]]
         [:li {:role "presentation" :class (u/get-tab-state 2)}
          [:a {:on-click #(u/set-active-tab 2)} "Upload Host Data"]]]
        (if (= 1 (u/active-tab))
          [host-list-component]
          [host-upload-component])]]]]))
