;;      Filename: hosts.clj
;; Creation Date: Saturday, 01 August 2015 09:26 AM AEST
;; Last Modified: Saturday, 01 August 2015 09:28 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.db.hosts
  (:require [yesql.core :refer [defqueries]]
            [arcis.db.core :refer [db-spec]]))

(defqueries "sql/hosts.sql" {:connection db-spec})

