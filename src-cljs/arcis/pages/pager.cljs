;;      Filename: pager.cljs
;; Creation Date: Friday, 25 September 2015 07:06 PM AEST
;; Last Modified: Monday, 05 October 2015 05:08 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.pager
  (:require [reagent.core :as r]
            [arcis.state :as state]
            [arcis.utils :as u]
            [goog.string :as gstring]))

(defn page-size []
  (state/value-in [(state/this-page) :pager :page-size]))

(defn set-page-size! [size]
  (state/set-value-in! [(state/this-page) :pager :page-size] size))

(defn get-active []
  (or (state/value-in [(state/this-page) :pager :current])
      1))

(defn set-active! [i]
  (state/set-value-in! [(state/this-page) :pager :current] i))

(defn get-page []
  (or (state/value-in [(state/this-page) :pager :page])
      1))

(defn set-page! [p]
  (state/set-value-in! [(state/this-page) :pager :page] p))

(defn is-active? [p]
  (= p (get-active)))

(defn page-item [p]
  [:li (when (is-active? p) {:class "active"})
   [:a {:on-click #(set-active! p)} (str p)]])

(defn current-page-list [pages]
  (get pages (get-page)))

(defn next-page-list [pages]
  (get pages (inc (get-page))))

(defn previous-page-list [pages]
  (get pages (dec (get-page))))

(defn previous-page [pages]
  (let [curr-page (get-page)
        curr-item (get-active)
        curr-list (current-page-list pages)
        prv-list (previous-page-list pages)
        [pg idx] (cond
                   (> curr-item (first curr-list)) [curr-page (dec curr-item)]
                   prv-list [(dec curr-page) (last prv-list)]
                   :else nil)]
    [:li (when-not pg {:class "disabled"})
     [:a {:on-click (fn []
                      (when pg
                        (set-page! pg)
                        (set-active! idx)))}
    (str (gstring/unescapeEntities "&laquo;") " Prev")]]))

(defn next-page [pages]
  (let [curr-page (get-page)
        curr-item (get-active)
        curr-list (current-page-list pages)
        next-list (next-page-list pages)
        [pg idx] (cond
                   (< curr-item (last curr-list)) [curr-page (inc curr-item)]
                   next-list [(inc curr-page) (first next-list)]
                   :else nil)]
    [:li (when-not pg {:class "disabled"})
     [:a {:on-click (fn []
                      (when pg
                        (set-page! pg)
                        (set-active! idx)))}
      (str "Next " (gstring/unescapeEntities "&raquo;"))]]))


(defn header [page-index]
  (.log js/console (str "header: page-index: " page-index))
  [:nav
   (conj (into [:ul.pagination [previous-page page-index]]
               (for [i (current-page-list page-index)]
                 ^{:key (str "p" i)} [page-item i]))
         [next-page page-index])])
