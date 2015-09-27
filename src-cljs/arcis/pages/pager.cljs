;;      Filename: pager.cljs
;; Creation Date: Friday, 25 September 2015 07:06 PM AEST
;; Last Modified: Monday, 28 September 2015 07:54 AM AEST
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
  (state/value-in [(state/this-page) :pager :current]))

(defn set-active! [p]
  (state/set-value-in! [(state/this-page) :pager :current] p))

(defn is-active? [p]
  (= p (get-active)))

(defn page-item [p]
  [:li (when (is-active? p) {:class "active"})
   [:a {:on-click #(set-active! p)} (str p)]])

(defn maybe-previous [first-idx]
  (when (< first-idx (get-active))
    (set-active! (dec (get-active)))))

(defn maybe-next [last-idx]
  (when (> last-idx (get-active))
    (set-active! (inc (get-active)))))

(defn previous-page [first-idx]
  [:li (when (= first-idx (get-active)) {:class "disabled"})
   [:a {:on-click #(maybe-previous first-idx)}
    (str (gstring/unescapeEntities "&laquo;") " Prev")]])

(defn next-page [last-idx]
  [:li (when (= last-idx (get-active)) {:class "disabled"})
   [:a {:on-click #(maybe-next last-idx)}
    (str "Next " (gstring/unescapeEntities "&raquo;"))]])

(defn header [idx]
  (let [pg-idx (into [:ul.pagination (previous-page (first idx))]
                     (for [i idx]
                       (page-item i)))]
    [:nav
     (conj pg-idx (next-page (last idx)))]))
