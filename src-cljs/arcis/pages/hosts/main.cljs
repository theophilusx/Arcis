;;      Filename: hosts.cljs
;; Creation Date: Monday, 20 July 2015 05:35 PM AEST
;; Last Modified: Monday, 03 August 2015 10:57 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.main
  (:require [arcis.pages.components :as c]
            [arcis.utils :as u]
            [arcis.pages.hosts.hosts-ajax :refer [get-host-list]]
            [arcis.pages.hosts.list :refer [host-list-component]]
            [arcis.pages.hosts.upload :refer [host-upload-component]]
            [reagent.session :as session]))

(defn tab-component []
  (fn []
    [::ul.nav.nav-tabs
     (doall (map (fn [k]
                   ^{:key k} [:li {:role "presentation" :class (u/get-tab-state k)}
                              [:a {:on-click #(u/set-active-tab k)} (str k ".X")]])
                 (keys (session/get-in [(u/this-page) :host-index]))))
     ^{:key :upload} [:li {:role "presentation"
                           :class (u/get-tab-state :upload)}
                      [:a {:on-click #(u/set-active-tab :upload)}
                       "Upload Data"]]]))

(defn hosts-page []
  (if-not (session/get-in [(u/this-page) :host-list])
    (get-host-list))
  (if-not (u/active-tab)
    (u/set-active-tab :upload))
  (fn []
    [:div.container
     [c/page-header "Hosts"]
     [:div.row
      [:div.col-md-12
       [c/status-component]
       [:div.row
        [tab-component]
        (if (= :upload (u/active-tab))
          [host-upload-component]
          [host-list-component (u/active-tab)])        ]]]]))

;; (defn hosts-page []
;;   (if-not (u/active-tab)
;;     (u/set-active-tab 1))
;;   (fn []
;;     [:div.container
;;      [c/page-header "Hosts"]
;;      [:div.row
;;       [:div.col-md-12
;;        [c/status-component]
;;        [:div.row
;;         [:ul.nav.nav-tabs
;;          [:li {:role "presentation" :class (u/get-tab-state 1)}
;;           [:a {:on-click #(u/set-active-tab 1)} "Host List"]]
;;          [:li {:role "presentation" :class (u/get-tab-state 2)}
;;           [:a {:on-click #(u/set-active-tab 2)} "Upload Host Data"]]]
;;         ]]]]))
