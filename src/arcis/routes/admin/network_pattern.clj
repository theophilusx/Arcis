;;      Filename: network_pattern.clj
;; Creation Date: Saturday, 10 October 2015 05:08 PM AEDT
;; Last Modified: Sunday, 18 October 2015 05:59 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.admin.network-pattern
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]
            [arcis.db.network :as ndb]))

(defn is-malformed-pattern? [params]
  (let [validation-map (first (b/validate params
                                          :group_name v/required
                                          :subgroup_name v/required
                                          :group_regexp v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn update-group-pattern [{:keys [group_name subgroup_name group_regexp]}]
  (if-not (ndb/network-group-exists? group_name subgroup_name)
    {:post-status {:status :not-exist
                   :message (str "Network group with group name of "
                                 group_name ":" subgroup_name
                                 " not found")}}
    (let [rslt (ndb/update-group-pattern! {:group_name group_name
                                           :subgroup_name subgroup_name
                                           :group_regexp group_regexp})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Network group with group name "
                                     group_name ":" subgroup_name
                                     " regexp pattern updated to " group_regexp)}}
        {:post-status {:status :unknown
                       :message (str "Unexpected result setting network group "
                                     group_name ":" subgroup_name
                                     " regexp pattern to " group_regexp)}}))))

(defresource group-pattern
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "group-pattern")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-pattern? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
          (let [params (get-in ctx [:request :params])]
            (update-group-pattern params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
