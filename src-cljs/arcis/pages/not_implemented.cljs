;;      Filename: not_implemented.cljs
;; Creation Date: Saturday, 04 July 2015 06:04 PM AEST
;; Last Modified: Saturday, 04 July 2015 06:07 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.not-implemented
  (:require [reagent.session :as session]
            [arcis.pages.components :as c]))

(defn not-implemented-page []
  [:div.container
   [c/page-header "Not Yet Implemented"]
   [:div.row
    [:div.col-md-12
     [:p "This functionality has not yet been implemented"]]]])

