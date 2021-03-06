;;      Filename: hosts.clj
;; Creation Date: Saturday, 01 August 2015 09:26 AM AEST
;; Last Modified: Tuesday, 15 September 2015 11:49 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.db.hosts
  (:require [arcis.db.core :refer [*conn*]]
            [conman.core :as conman]))

(conman/bind-connection *conn* "sql/hosts.sql")

(defn host-exists? [host_id]
  (if (= 1 (count (get-host-by-id {:host_id host_id})))
    true
    false))
