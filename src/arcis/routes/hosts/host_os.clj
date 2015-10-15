(ns arcis.routes.hosts.host-os
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [arcis.db.hosts :as hdb]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(defn is-malformed-os [params]
  (let [validation-msg (first (b/validate params
                                          :host_id v/required
                                          :os v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn update-host-os [{:keys [host_id os]}]
  (if-not (hdb/host-exists? host_id)
    {:post-status {:status :not-exist
                   :message (str "Host with ID " host_id " not found")}}
    (let [rslt (hdb/update-os! {:host_id host_id :os os})]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Updated host ID " host_id
                                     " set OS to " os )}}
        {:post-status {:status :unknwon
                       :message (str "Unexpected result changine OS for host "
                                     host_id " to " os)}}))))

(defresource set-host-os
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [identity (get-in ctx [:request :identity])]
                   (u/is-authorized? identity #{"Admin" "User"})))
  :handle-unauthorized (fn [ctx]
                         (let [identity (get-in ctx [:request :identity])]
                           (u/handle-unauthorized identity "set-host-os")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-os params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (update-host-os params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
