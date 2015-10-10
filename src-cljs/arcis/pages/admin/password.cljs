;;      Filename: password.cljs
;; Creation Date: Wednesday, 08 July 2015 02:20 PM AEST
;; Last Modified: Sunday, 11 October 2015 08:40 AM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.password
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.ajax :as ajax]
            [ajax.core :refer [POST]]
            [reagent.core :as r :refer [atom]]
            [arcis.state :as state]))

(defn pwd-change [data]
  (fn [response]
    (get-app-users)
    (u/report-success (:message response))
    (reset! data {})))

(defn handle-pwd-change [pdata]
  (if (state/is-authenticated?)
    (ajax/post-it "handle-pwd-change" "/admin/password"
                  {:id (:id @pdata) :password (:value @pdata)}
                  (pwd-change pdata))
    (u/report-unauthenticated "handle-pwd-change")))

(defn cancel-pwd-change [pwd-data]
  (let [id (:id @pwd-data)]
    (state/set-value-in! [(state/this-page) :users
                          (u/digit-keyword id) :edit-pwd] false)
    (reset! pwd-data {})))

(defn password-change-component [id]
  (let [pwd-data (r/atom {})]
    (fn [id]
      (swap! pwd-data assoc :id id)
      [c/inline-text-field-component pwd-data #'handle-pwd-change
       #'cancel-pwd-change])))

(defn password-link-component [id]
  [:div
   [:a {:on-click #(state/set-value-in! [(state/this-page) :users
                                         (u/digit-keyword id) :edit-pwd] true)}
    "Change Password"]])

(defn password-component [id]
  (if (state/value-in [(state/this-page) :users (u/digit-keyword id) :edit-pwd])
    [password-change-component id]
    [password-link-component id]))
