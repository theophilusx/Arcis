;;      Filename: host_os.cljs
;; Creation Date: Friday, 16 October 2015 10:18 AM AEDT
;; Last Modified: Friday, 16 October 2015 01:32 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.host-os
  (:require [arcis.state :as state]
            [arcis.utils :as u]
            [arcis.ajax :as ajax]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.hosts-ajax :refer [get-host-list]]
            [reagent.core :as r]))

(defn update-response [data]
  (fn [response]
    (get-host-list)
    (u/report-success (:message response))
    (reset! data {})))

(defn cancel-os-edit [data]
  (state/set-value-in! [(state/this-page) :host-list
                        (u/digit-keyword (:host_id @data)) :os-edit] false))

(defn update-os [data]
  (if (state/is-authenticated?)
    (ajax/post-it "update-os" "/hosts/host-os"
                  {:host_id (:host_id @data)
                   :os (:value @data)}
                  (update-response data))
    (state/set-value-in! [(state/this-page) :host-list
                          (u/digit-keyword (:host_id @data)) :os-edit] false)))

(defn os-link-component [host-id val]
  [:div
   [:strong "Operating System "]
   val [:a {:on-click (fn [e]
                        (.log js/console (str "Host ID: " host-id))
                        (state/set-value-in! [(state/this-page) :host-list
                                              (u/digit-keyword host-id)
                                              :os-edit] true))}
        val [:span {:class "fa fa-pencil"}]]])

(defn os-edit-component [host-id val]
  (let [data (r/atom [])]
    (fn [host-id val]
      (.log js/console (str "os-edit-component: host-id " host-id
                            " val = " @val))
      (swap! data assoc :host_id host-id :value val)
      [:div
       [:strong "Operating System "]
       [c/inline-text-field-component data #'update-os #'cancel-os-edit]])))

(defn os-component [host-id value]
  (let [edit-state (state/value-in [(state/this-page) :host-list
                                    (u/digit-keyword host-id) :os-edit])]
    (.log js/console (str "os-component: edit-state = " edit-state))
    (if (state/value-in [(state/this-page) :host-list
                         (u/digit-keyword host-id) :os-edit])
      [os-edit-component host-id value]
      [os-link-component host-id value])))
