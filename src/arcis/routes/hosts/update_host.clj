;;      Filename: update_host.clj
;; Creation Date: Sunday, 18 October 2015 02:09 PM AEDT
;; Last Modified: Sunday, 18 October 2015 07:16 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.hosts.update-host
  (:require [arcis.db.hosts :as hdb]
            [arcis.utils :as u]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]))

(defn is-malformed-host [params]
  (let [validation-map (first (b/validate params
                                          :host_id v/required
                                          :status v/required
                                          :os v/required
                                          :host_type v/required
                                          :management_group v/required
                                          :dhcp v/required
                                          :dns v/required
                                          :reverse_dns v/required))]
    (if (nil? validation-map)
      false
      {:validation-errors validation-map})))

(defn host-update [params]
  (if-not (hdb/host-exists? (:host_id params))
    {:post-status {:status :not-exist
                   :message (str "Host with ID "
                                 (:host_id params) " not found")}}
    (let [rslt (hdb/update-host! params)]
      (if (= rslt 1)
        {:post-status {:status :success
                       :message (str "Host with ID " (:host_id params)
                                     " successfully updated")}}
        {:post-status {:status :unknown
                       :message (str "unexpected result updating host "
                                     (:host_id params) " with " params)}}))))

(defresource do-host-update
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [id (get-in ctx [:request :identity])]
                   (u/is-authorized? id #{"Admin" "User"})))
  :handle-unauthorized (fn [ctx]
                         (let [id (get-in ctx [:request :identity])]
                           (u/handle-unauthorized id "do-host-update")))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-host params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])]
             (host-update params)))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
