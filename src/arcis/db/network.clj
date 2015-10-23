;;      Filename: network.clj
;; Creation Date: Saturday, 29 August 2015 11:29 AM AEST
;; Last Modified: Tuesday, 15 September 2015 11:52 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.db.network
  (:require [arcis.db.core :refer [*conn*]]
            [conman.core :as conman]))

(conman/bind-connection *conn* "sql/network.sql")

(defn network-group-exists? [network-group subgroup]
  (if (= 1 (count (get-group-by-name {:group_name network-group
                                          :subgroup_name subgroup})))
    true
    false))
