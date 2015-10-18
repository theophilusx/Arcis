;;      Filename: list.cljs
;; Creation Date: Monday, 20 July 2015 06:07 PM AEST
;; Last Modified: Sunday, 18 October 2015 01:05 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.list
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.sidebar :as sidebar]
            [arcis.pages.pager :as pager]
            [arcis.pages.hosts.host-utils :as hu]
            [arcis.pages.hosts.host-edit :refer [host-edit-component]]
            [reagent.core :as r]
            [reagent-forms.core :refer [bind-fields]]))

(defn mac-str [val]
  (if (= val "00:00:00:00:00:00")
    ""
    (str " (" val ")")))

(defn host-summary-component [host]
  [:dl.dl-horizontal
   [:dt [:a {:class "pull-left"
             :aria-label "Expand"
             :on-click #(hu/set-display-action (:host-id host) :full)}
         [:span {:class (str "fa fa-plus")}]] "Host"]
   [:dd {:class (condp = (:status host)
                  "Active" "text-success"
                  "Inactive" "text-info"
                  "Unknown" "text-warning"
                  :else "text-danger")}
    (str (:hostname host) " / " (:ipv4 host) (mac-str (:mac host)) " ")
    [:a {:on-click #(hu/set-display-action (:host-id host) :edit)}
     "(edit)"]]])

(defn host-full-component [host]
  [:dl.dl-horizontal
   [:dt [:a {:class "pull-left"
             :aria-label "Expand"
             :on-click #(hu/set-display-action (:host-id host) :summary)}
         [:span {:class (str "fa fa-minus")}]] "Host"]
   [:dd {:class (condp = (:status host)
                  "Active" "text-success"
                  "Inactive" "text-info"
                  "Unknown" "text-warning"
                  :else "text-danger")}
    (str (:hostname host) " / " (:ipv4 host) (mac-str (:mac host)) " ")
    [:a {:on-click #(hu/set-display-action (:host-id host) :edit)}
     "(edit)"]]
   [:dt "Status"] [:dd (:status host)]
   [:dt "Operating System"] [:dd (:os host)]
   [:dt "Network Group"] [:dd (str (:network-group host) " / "
                                   (:subgroup-name host))]
   [:dt "Type"] [:dd (:host-type host)]
   [:dt "Managed"] [:dd (:management-group host)]
   [:dt "DHCP"] [:dd (:dhcp host)]
   [:dt "DNS"] [:dd (str (:dhcp host) " Reverse DNS " (:reverse-dns host))]
   [:dt "Created"] [:dd (:created-dt host)]
   [:dt "Last Seen"] [:dd (:last-seen-dt host)]
   [:dt "Last Modified"] [:dd (:last-modified-dt host)]])

(defn host-component [k]
  (let [host (state/value-in [(state/this-page) :host-list k])]
    (.log js/console (str "host-component display-action = "
                          (:display-action host)))
    (condp = (:display-action host)
      :summary [host-summary-component host]
      :full [host-full-component host]
      :edit [host-edit-component host])))

(defn hosts-page [page-cursor]
  (into [:div.col-md-12]
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


