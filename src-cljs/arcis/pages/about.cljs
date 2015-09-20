;;      Filename: about.cljs
;; Creation Date: Saturday, 04 July 2015 05:56 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:52 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.about
  (:require [arcis.state :as state]
            [arcis.pages.components :as c]
            [arcis.pages.login :refer [login-component]]
            [arcis.debug :as d]))

(defn about-page []
  [:div.container
   [c/page-header "About Arcis"]
   [:div.col-md-12
    [c/status-component]
    (when-not (state/is-authenticated?)
      [login-component])
    [d/state-keys]
    [d/render-state]]])
