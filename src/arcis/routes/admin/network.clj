;;      Filename: network.clj
;; Creation Date: Saturday, 29 August 2015 06:42 PM AEST
;; Last Modified: Thursday, 17 September 2015 05:42 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.admin.network
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.network :as ndb]))

(defn is-malformed-group? [params]
  (let [vmap (first (b/validate params
                                :group-name v/required
                                :subgroup-name v/required
                                :group-regexp v/required))]
    (if (nil? vmap)
      false
      {:validation-errors vmap})))

(defn group-exists? [group-name subgroup-name]
  (if (< 0 (count (ndb/get-group-by-name {:group_name group-name
                                          :subgroup_name subgroup-name})))
    true
    false))

(defn create-network-group [{:keys [group-name subgroup-name group-regexp]}]
  (if (group-exists? group-name subgroup-name)
    {:post-status {:status :duplicate
                   :message (str "A network group with the name "
                                 group-name "/" subgroup-name
                                 " already exists")}}
    (let [rslt (ndb/create-network-group! {:group_name group-name
                                           :subgroup_name subgroup-name
                                           :group_regexp group-regexp})]
      (if (= 1 rslt)
        {:post-status {:status :success
                       :message (str "Created new group " group-name "/"
                                     subgroup-name)}}
        {:post-status {:status :unknown
                       :message
                       (str "Unexpected result creating network group "
                            group-name "/" subgroup-name " Status: " rslt)}}))))

(defresource add-group
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "add-group")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-group? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (create-network-group params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))

(defn generate-group-list []
  (let [groups (map #(assoc
                      % :created_dt (u/date-to-str (:created_dt %))
                      :last_modified_dt (u/date-to-str (:last_modified_dt %)))
                    (ndb/get-network-groups))]
    (generate-string groups)))

(defresource group-list
  :allowed-methods [:get]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{:Admin})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "group-list")))
  :handle-ok (fn [ctx]
               (generate-group-list)))
