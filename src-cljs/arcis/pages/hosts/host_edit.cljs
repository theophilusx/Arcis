;;      Filename: host_edit.cljs
;; Creation Date: Saturday, 17 October 2015 09:36 AM AEDT
;; Last Modified: Sunday, 18 October 2015 01:11 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.host-edit
  (:require [arcis.utils :as u]
            [arcis.ajax :as ajax]
            [arcis.state :as state]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.host-utils :as hu]
            [reagent.core :as r :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [bouncer.core :as b]
            [bouncer.validators :as v]))


(def host-template
  [:div.form-horizontal
   (c/radio-input "Host Status" :status [[:unknown "Unknown"]
                                         [:active "Active"]
                                         [:inactive "Inactive"]])
   (c/input "Operating System" :text :os)
   (c/input "Host Type" :text :host-type)
   (c/input "Managed By" :text :management-group)
   (c/radio-input "DHCP Client" :dhcp [[:y "Yes"]
                                       [:n "No"]])
   (c/radio-input "DNS Entry" :dns [[:y "Yes"]
                                    [:n "No"]])
   (c/radio-input "Reverse DNS" :reverse-dns [[:y "Yes"]
                                              [:n "No"]])])

(defn update-host [host]
  (.log js/console (str "update-host host " @host))
  (hu/set-display-action (:host-id @host) :full)
  (reset! host {}))

(defn init-edit-data [host]
  {:host-id (:host-id host)
   :status (condp = (:status host)
                  "Unknown" :unknown
                  "Active" :active
                  "Inactive" :inactiv
                  :else :unknown)
   :os (:os host)
   :host-type (:host-type host)
   :management-group (:management-group host)
   :dhcp (condp = (:dhcp host)
           "Y" :y
           "N" :n
           :else :n)
   :dns (condp = (:dns host)
          "Y" :y
          "N" :n
          :else :n)
   :reverse-dns (condp = (:reverse-dns host)
                  "Y" :y
                  "N" :n
                  :else :n)})

(defn host-edit-component [host]
  (let [data (r/atom (init-edit-data host))]
    (.log js/console (str "host-edit-component init host = " (:host-id host)))
    (fn [host]
      (.log js/console (str "host-edit-component fn host" (:host-id host)
                            " data " (:host-id @data)))
      [:div
       [:legend "Host Update"]
       [:h5 (:hostname host)]
       [bind-fields host-template data]
       [:div
        [:button.btn.btn-default
         {:on-click #(hu/set-display-action (:host-id @data) :summary)}
         "Cancel"]
        " "
        [:button.btn.btn-primary
         {:on-click #(update-host data)} "Update"]]
       [:hr]])))
