;;      Filename: network_state.clj
;; Creation Date: Saturday, 10 October 2015 04:16 PM AEDT
;; Last Modified: Saturday, 10 October 2015 05:50 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.network-state
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.network :as ndb]))

(defn is-malformed-state? [params]
  (let [validation-map (first (b/validate params
                                          :group_name v/required
                                          :subgroup_name v/required
                                          :active v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn update-active-state [{:keys [group_name subgroup_name active]}]
  (if-not (u/network-group-exists? group_name subgroup_name)
    {:post-status {:status :not-exist
                   :message (str "Network group with group name of "
                                 group_name ":" subgroup_name
                                 " not found")}}
    (let [rslt (ndb/set-active-state! {:group_name group_name
                                       :subgroup_name subgroup_name
                                       :active active})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Network group with group name "
                                     group_name ":" subgroup_name
                                     " active state set to " active)}}
        {:post-status {:status :unknown
                       :message (str "Unexpected result setting network group "
                                     group_name ":" subgroup_name
                                     " active state to " active)}}))))

(defresource set-group-state
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "set-group-state")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-state? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
          (let [params (get-in ctx [:request :params])]
            (update-active-state params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
