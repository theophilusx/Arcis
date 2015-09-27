;;      Filename: hosts.cljs
;; Creation Date: Monday, 20 July 2015 05:35 PM AEST
;; Last Modified: Sunday, 27 September 2015 07:11 PM AEST
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

(defn hosts-page []
  (when-not (tabs/get-active)
    (tabs/set-active! :upload))
  (fn []
    (let [tab-list (conj (keys (state/value-in [(state/this-page) :host-index]))
                         :upload)]
      [:div.container
       [c/page-header "Hosts"]
       [:div.row
        [:div.col-md-12
         [c/status-component]]
        (when-not (state/is-authenticated?)
          [login-component])
        [:div.row
          (tabs/tab-component tab-list)
          (if (= :upload (tabs/get-active))
            [host-upload-component]
            [host-list-component (tabs/get-active)])        ]]])))

