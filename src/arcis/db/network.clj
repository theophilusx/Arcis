;;      Filename: network.clj
;; Creation Date: Saturday, 29 August 2015 11:29 AM AEST
;; Last Modified: Tuesday, 15 September 2015 11:52 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.db.network
  (:require [conman.core :as conman]
            [arcis.db.core :refer [*conn*]]))

(conman/bind-connection *conn* "sql/network.sql")


