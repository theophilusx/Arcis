;;      Filename: state.cljs
;; Creation Date: Sunday, 20 September 2015 10:50 AM AEST
;; Last Modified: Sunday, 20 September 2015 12:41 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.state
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]))

(defn value-of [cursor]
  (session/get cursor))

(defn set-value! [cursor data]
  (session/put! cursor data))

(defn value-in [cursor]
  (session/get-in cursor))

(defn set-value-in! [cursor data]
  (session/assoc-in! cursor data))

(defn this-page []
  (session/get :page))

(defn set-page! [page]
  (session/put! :page page))

(defn is-authenticated? []
  (if (value-in [:user-data :token])
    true
    false))
