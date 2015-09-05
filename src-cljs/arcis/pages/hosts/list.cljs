;;      Filename: list.cljs
;; Creation Date: Monday, 20 July 2015 06:07 PM AEST
;; Last Modified: Saturday, 05 September 2015 09:39 PM AEST
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

(defn host-component [k]
  (let [host (session/get-in [(u/this-page) :host-list k])]
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
                  [:span {:class (str "glyphicon "
                                      (if (= "show" (:visible host))
                                        "glyphicon-minus"
                                        "glyphicon-plus"))}]]
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

(defn sidebar-component [ks]
  [:ul.nav.nav-pills.nav-stacked
   (doall (for [k ks]
            ^{:key k} [:li {:role "presentation"
                            :class (u/get-active-sidebar-state k)}
                       [:a {:on-click #(u/set-sidebar-menu k)}
                        (name k)]]))])

(defn host-list-component [idx]
  (let [host-list (session/get-in [(u/this-page) :host-list])
        host-index (session/get-in [(u/this-page) :host-index])
        sub-keys (sort (keys (idx host-index)))]
    (if-not (u/sidebar-menu)
      (u/set-sidebar-menu (first sub-keys)))
    [:div.row
     [:div.col-md-2
      [sidebar-component sub-keys]]
     [:div.col-md-10
      [:h3 (name (u/sidebar-menu))]
      (for [id (get-in host-index [idx (u/sidebar-menu)])]
        ^{:key (str idx id)} [host-component id])]]))


