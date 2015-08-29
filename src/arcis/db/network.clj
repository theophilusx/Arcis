;;      Filename: network.clj
;; Creation Date: Saturday, 29 August 2015 11:29 AM AEST
;; Last Modified: Saturday, 29 August 2015 11:31 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.db.network
  (:require [yesql.core :refer [defqueries]]
            [arcis.db.core :refer [db-spec]]))

(defqueries "sql/network.sql" {:connection db-spec})

