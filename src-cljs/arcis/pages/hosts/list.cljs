;;      Filename: list.cljs
;; Creation Date: Monday, 20 July 2015 06:07 PM AEST
;; Last Modified: Sunday, 11 October 2015 05:24 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.list
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.sidebar :as sidebar]
            [arcis.pages.pager :as pager]
            [arcis.pages.hosts.hosts-ajax :refer [get-host-list]]))

(defn toggle-visibility [k h]
  (let [new-v (if (= "show" (:visible h))
                "hidden"
                "show")]
    (state/set-value-in! [(state/this-page) :host-list k :visible] new-v)))

(defn host-component [k]
  (let [host (state/value-in [(state/this-page) :host-list k])]
    ^{:key k} [:div.panel.panel-default
               [:div {:class "panel-heading show"}
                [:div {:class (condp = (:status host)
                                "Active" "text-success"
                                "Inactive" "text-info"
                                "Unknown" "text-warning"
                                :else "text-danger")}
                 [:button {:type "button" :class "btn btn-default"
                           :aria-label "Expand"
                           :on-click #(toggle-visibility k host)}
                  [:span {:class (str "fa "
                                      (if (= "show" (:visible host))
                                        "fa-compress"
                                        "fa-expand"))}]]
                 [:strong " IPv4 Address: "] (:ipv4 host)
                 [:strong " Hostname: "] (:hostname host)
                 [:div.pull-right (str "Host ID: " (:host-id host))]]]
               [:div {:class (str "panel-body " (:visible host))}
                [:ul.list-group
                 [:li.list-group-item
                  [:strong "Host Status: "] (:status host)]
                 [:li.list-group-item
                  [:strong "MAC Address: "] (:mac host)]
                 [:li.list-group-item
                  [:strong "IPv6 Address: "] (:ipv6 host)]
                 [:li.list-group-item
                  [:strong "Operating System: "] (:os host)]
                 [:li.list-group-item
                  [:strong "DHCP Client: "] (:dhcp host)
                  [:strong " DNS Entry: "] (:dns host)
                  [:strong " Revers DNS Entry: "] (:reverse-dns host)]
                 [:li.list-group-item
                  [:strong "Host Type: "] (:host-type host)]
                 [:li.list-group-item
                  [:strong "Network Group: "]
                  (str (:network-group host) " / " (:subgroup-name host))]
                 [:li.list-group-item
                  [:strong "Managed By: "] (:management-group host)]
                 [:li.list-group-item
                  [:strong "Creation Date: "] (:created-dt host)]
                 [:li.list-group-item
                  [:strong "Last Modified Date: "] (:last-modified-dt host)]
                 [:li.list-group-item
                  [:strong "Last Seen Date: "] (:last-seen-dt host)]]]]))

(defn hosts-page [page-cursor]
  (into [:div]
        (for [i (get-in @page-cursor [(pager/active-page)
                                      (pager/active-index)])]
          [host-component i])))

(defn host-pager-title []
  [:h3 (name (sidebar/get-active))])

(defn host-pager-component [idx1 idx2]
  (let [paginate-cursor (state/cursor [(state/this-page) :host-index
                                       idx1 idx2])]
    [:row
     [host-pager-title (sidebar/get-active)]
     [pager/header paginate-cursor]
     [hosts-page paginate-cursor]]))

(defn host-menu-component [menu-items]
  (when-not (sidebar/get-active)
    (sidebar/set-active! (first menu-items)))
  [sidebar/sidebar-menu-component menu-items])

(defn host-list-component [net-cursor idx]
  (let [sidebar-keys (vec (sort (keys (idx @net-cursor))))]
    [:div.row
     [:div.col-md-2
      [host-menu-component sidebar-keys]]
     [:div.col-md-10
      [host-pager-component idx (sidebar/get-active)]]]))


