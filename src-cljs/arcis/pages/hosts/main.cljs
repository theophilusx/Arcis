;;      Filename: hosts.cljs
;; Creation Date: Monday, 20 July 2015 05:35 PM AEST
;; Last Modified: Saturday, 05 September 2015 07:01 PM AEST
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

(defn tab-item [k]
  [:li {:role "presentation" :class (u/get-tab-state k)}
             [:a {:on-click #(u/set-active-tab k)} (name k)]])

(defn tab-component []
  (let [idx-keys (keys (session/get-in [(u/this-page) :host-index]))]
    [::ul.nav.nav-tabs
     (for [k idx-keys]
       ^{:key k} [tab-item k])
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

