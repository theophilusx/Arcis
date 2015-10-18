;;      Filename: hosts.cljs
;; Creation Date: Monday, 20 July 2015 05:35 PM AEST
;; Last Modified: Sunday, 18 October 2015 08:21 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.main
  (:require [arcis.pages.components :as c]
            [arcis.pages.tabs :as tabs]
            [arcis.pages.login :refer [login-component]]
            [arcis.pages.hosts.list :refer [host-list-component]]
            [arcis.pages.hosts.upload :refer [host-upload-component]]
            [arcis.state :as state]))

(defn hosts-data-component [idx-cursor active-tab]
  [:div.row
   (if (= :upload active-tab)
     [host-upload-component]
     [host-list-component idx-cursor active-tab])])

(defn hosts-page []
  (let [net-idx-cursor (state/cursor [(state/this-page) :host-index])]
    (when-not (tabs/get-active)
      (tabs/set-active! :upload))
    (fn []
      (let [tab-list (conj (keys @net-idx-cursor) :upload)]
        [:div.container
         [c/page-header "Hosts"]
         [:div.row
          [:div.col-md-12
           [c/status-component]]
          (when-not (state/is-authenticated?)
            [login-component])
          [:div.row
           [tabs/tab-component tab-list]]
          [:div.row
           [hosts-data-component net-idx-cursor (tabs/get-active)]]]]))))

