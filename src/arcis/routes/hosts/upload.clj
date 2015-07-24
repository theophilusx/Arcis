;;      Filename: upload.clj
;; Creation Date: Friday, 24 July 2015 12:49 PM AEST
;; Last Modified: Saturday, 25 July 2015 07:35 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.routes.hosts.upload
  (:require [cheshire.core :refer [generate-string]]
            [liberator.core :refer [defresource]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.utils :as u]))

(defn is-malformed-upload? [{:keys [upload-file] :as p}]
  (let [vmap (first (b/validate upload-file
                                :filename v/required
                                :size v/required
                                :tempfile v/required))]
    (if (nil? vmap)
      false
      {:validation-errors vmap})))

(defresource upload-hosts
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :authorized? (fn [ctx]
                 (let [role (get-in ctx [:request :session :identity-role])]
                   (u/is-authorized? #{:Admin} role)))
  :handle-unauthorized (fn [ctx]
                         (let [user (get-in ctx [:request :session :identity])]
                           (if (nil? user)
                             (u/unauthenticated-msg :upload-hosts)
                             (u/unauthorized-msg :upload-hosts
                                                 "upload hosts"))))
  :malformed? (fn [ctx]
                (let [params (get-in ctx [:request :params])]
                  (is-malformed-upload? params)))
  :handle-malformed (fn [ctx]
                      (let [vmap (get ctx :validation-errors)]
                        (u/handle-malformed-json-request vmap)))
  :post! (fn [ctx]
           (let [file-upload (get-in ctx [:request :params :upload-file])
                 filename (:filename file-upload)
                 size (:size file-upload)
                 tempfile (:tempfile file-upload)]
             {:post-status {:status :success
                            :message (str "Params: " filename
                                          " " size
                                          " " tempfile)}}))
  :handle-created (fn [ctx]
                    (let [status (get ctx :post-status)]
                      (generate-string status))))
