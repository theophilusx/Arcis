;;      Filename: migrations.clj
;; Creation Date: Tuesday, 15 September 2015 11:55 AM AEST
;; Last Modified: Tuesday, 15 September 2015 11:55 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.db.migrations
  (:require [environ.core :refer [env]]
            [migratus.core :as migratus]
            [to-jdbc-uri.core :refer [to-jdbc-uri]]))

(defn parse-ids [args]
  (map #(Long/parseLong %) (rest args)))

(defn migrate [args]
  (let [config {:store :database
                :db {:connection-uri (to-jdbc-uri (:database-url env))}}]
    (case (first args)
      "migrate"
      (if (> (count args) 1)
        (apply migratus/up config (parse-ids args))
        (migratus/migrate config))
      "rollback"
      (if (> (count args) 1)
        (apply migratus/down config (parse-ids args))
        (migratus/rollback config)))))
