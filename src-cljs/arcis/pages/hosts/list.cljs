;;      Filename: list.cljs
;; Creation Date: Monday, 20 July 2015 06:07 PM AEST
;; Last Modified: Sunday, 02 August 2015 06:45 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.list
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.hosts-ajax :refer [get-host-list]]
            [reagent.session :as session]))

(defn toggle-visibility [k h]
  (let [new-v (if (= "show" (:visible h))
                "hidden"
                "show")]
    (session/assoc-in! [(session/get :page) :host-list k :visible] new-v)))

(defn host-component [k h]
  ^{:key k} [:div.panel.panel-default
             [:div {:class "panel-heading show"}
              [:div {:class (condp = (:status h)
                              "Active" "text-success"
                              "Inactive" "text-info"
                              "Unknown" "text-warning"
                              :else "text-danger")}
               [:button {:type "button" :class "btn btn-default"
                         :aria-label "Expand"
                         :on-click #(toggle-visibility k h)}
                [:span {:class (str "glyphicon " (if (= "show" (:visible h))
                                                   "glyphicon-minus"
                                                   "glyphicon-plus"))}]]
               [:strong " IPv4 Address: "] (:ipv4 h)
               [:strong " Hostname: "] (:hostname h)
               [:div.pull-right (str "Host ID: " (:host-id h))]]]
             [:div {:class (str "panel-body " (:visible h))}
              [:ul.list-group
               [:li.list-group-item
                [:strong "Host Status: "] (:status h)]
               [:li.list-group-item
                [:strong "MAC Address: "] (:mac h)]
               [:li.list-group-item
                [:strong "IPv6 Address: "] (:ipv6 h)]
               [:li.list-group-item
                [:strong "Operating System: "] (:os h)]
               [:li.list-group-item
                [:strong "Host Type"] (:host-type h)]
               [:li.list-group-item
                [:strong "Network Group: "] (:network-gorup h)]
               [:li.list-group-item
                [:strong "Managed By: "] (:management-group h)]
               [:li.list-group-item
                [:strong "Creation Date: "] (:created-dt h)]
               [:li.list-group-item
                [:strong "Last Modified Date: "] (:last-modified-dt h)]
               [:li.list-group-item
                [:strong "Last Seen Date: "] (:last-seen-dt h)]]]])


(defn host-list-component []
  (if-not (session/get-in [(session/get :page) :host-list])
    (get-host-list))
  (fn []
    (let [host-list (session/get-in [(session/get :page) :host-list])]
      [:div
       (map (fn [k]
              (host-component k (k host-list))) (keys host-list))])))

