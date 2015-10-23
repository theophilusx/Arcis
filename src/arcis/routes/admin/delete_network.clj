;;      Filename: delete_network.clj
;; Creation Date: Friday, 09 October 2015 03:55 PM AEDT
;; Last Modified: Sunday, 18 October 2015 05:57 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.admin.delete-network
  (:require [arcis.db.network :as ndb]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]))

(defn is-malformed-delete [params]
  (let [validation-msg (first (b/validate params
                                          :group_name v/required
                                          :subgroup_name v/required))]
    (if (nil? validation-msg)
      false
      {:validation-errors validation-msg})))

(defn delete-group [{:keys [group_name subgroup_name]}]
  (if-not (ndb/network-group-exists? group_name subgroup_name)
    {:post-status {:status :not-exist
                   :message (str "Network group with group name of "
                                 group_name ":" subgroup_name
                                 " not found")}}
    (let [rslt (ndb/delete-group! {:group_name group_name
                                   :subgroup_name subgroup_name})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Network group with group name of "
                                     group_name ":" subgroup_name
                                     " deleted")}}
        {:post-status {:status :unknown
                       :message (str "Unexpected result deleting network group "
                                     group_name ":" subgroup_name
                                     " Result: " rslt)}}))))

(defresource delete-network-group
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "delete-network-group")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-delete params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
          (let [params (get-in ctx [:request :params])]
            (delete-group params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
