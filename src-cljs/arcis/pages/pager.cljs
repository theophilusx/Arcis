;;      Filename: pager.cljs
;; Creation Date: Friday, 25 September 2015 07:06 PM AEST
;; Last Modified: Friday, 09 October 2015 02:48 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.pager
  (:require [reagent.core :as r]
            [arcis.state :as state]
            [arcis.utils :as u]
            [goog.string :as gstring]))

(defn set-page-count! [cnt]
  (state/set-value-in! [(state/this-page) :pager :page-count] cnt))

(defn page-count []
  (state/value-in [(state/this-page) :pager :page-count]))

(defn set-active-index! [i]
  (state/set-value-in! [(state/this-page) :pager :current] i))

(defn active-index []
  (let [idx (state/value-in [(state/this-page) :pager :current])]
    (cond
      (not idx) (do
                  (.log js/console (str "Error: No active index: " idx))
                  (set-active-index! 1)
                  1)
      (< idx 1) (do
                  (.log js/console (str "Error: Active index < 1: " idx))
                  (set-active-index! 1)
                  1)
      :else idx)))

(defn set-active-page! [p]
  (state/set-value-in! [(state/this-page) :pager :page] p))

(defn active-page []
  (let [pg (state/value-in [(state/this-page) :pager :page])]
    (cond
      (not pg) (do
                 (.log js/console (str "Error: No active page: " pg))
                 (set-active-page! 1)
                 1)
      (< pg 1) (do
                 (.log js/console (str "Error: Active page < 1: " pg))
                 (set-active-page! 1)
                 1)
      (> pg (page-count)) (do
                            (.log js/console (str "Error: Active page > "
                                                  " page count: " pg " "
                                                  (page-count)))
                            (set-active-page! 1)
                            1)
      :else pg)))

(defn is-active? [p]
  (= p (active-index)))

(defn page-item [p]
  [:li (when (is-active? p) {:class "active"})
   [:a {:on-click #(set-active-index! p)} (str p)]])

(defn current-page-list [pages]
  (vec (keys (get @pages (active-page)))))

(defn next-page-list [pages]
  (vec (keys (get @pages (inc (active-page))))))

(defn previous-page-list [pages]
  (vec (keys (get @pages (dec (active-page))))))

(defn previous-page [pages]
  (let [curr-page (active-page)
        curr-item (active-index)
        curr-list (current-page-list pages)
        prv-list (previous-page-list pages)
        [pg idx] (cond
                   (> curr-item (first curr-list)) [curr-page (dec curr-item)]
                   (seq prv-list) [(dec curr-page) (last prv-list)]
                   :else nil)]
    [:li (when-not pg {:class "disabled"})
     [:a {:on-click (fn []
                      (when pg
                        (set-active-page! pg)
                        (set-active-index! idx)))}
    (str (gstring/unescapeEntities "&laquo;") " Prev")]]))

(defn next-page [pages]
  (let [curr-page (active-page)
        curr-item (active-index)
        curr-list (current-page-list pages)
        next-list (next-page-list pages)
        [pg idx] (cond
                   (< curr-item (last curr-list)) [curr-page (inc curr-item)]
                   (seq next-list) [(inc curr-page) (first next-list)]
                   :else nil)]
    [:li (when-not pg {:class "disabled"})
     [:a {:on-click (fn []
                      (when pg
                        (set-active-page! pg)
                        (set-active-index! idx)))}
      (str "Next " (gstring/unescapeEntities "&raquo;"))]]))


(defn header [page-cursor]
  (set-page-count! (count (keys @page-cursor)))
  [:nav
   (conj (into [:ul.pagination [previous-page page-cursor]]
               (for [i (current-page-list page-cursor)]
                 ^{:key (str "p" i)} [page-item i]))
         [next-page page-cursor])])
