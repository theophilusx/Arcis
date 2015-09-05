;;      Filename: list.cljs
;; Creation Date: Monday, 20 July 2015 06:07 PM AEST
;; Last Modified: Saturday, 05 September 2015 07:08 PM AEST
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


(defn host-list-component [idx]
  (let [host-list (session/get-in [(u/this-page) :host-list])
        host-index (session/get-in [(u/this-page) :host-index])
        sub-keys (keys (idx host-index))]
    (if-not (session/get-in [(u/this-page) :subgroup])
      (session/assoc-in! [(u/this-page) :subgroup] (first sub-keys)))
    [:div.row
     [:div.col-md-2
      [:ul.list-group
       (for [k sub-keys]
         ^{:key k} [:li.list-group-item
                    [:a {:on-click #(session/assoc-in! [(u/this-page)
                                                        :subgroup] k)}
                     (name k)]])]]
     [:div.col-md-10
      (for [id (get-in host-index [idx (session/get-in
                                        [(u/this-page) :subgroup])])]
        ^{:key (str idx id)} [host-component id])]]))


      ;; (map (fn [id]
      ;;        (host-component id (id host-list)))
      ;;      (get-in host-index [idx (session/get-in
      ;;                               [(u/this-page) :subgroup])]))
