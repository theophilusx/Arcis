;;      Filename: core.clj
;; Creation Date: Saturday, 04 July 2015 12:26 PM AEST
;; Last Modified: Tuesday, 15 September 2015 08:06 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.db.core
  (:require [cheshire.core :refer [generate-string parse-string]]
            [clojure.java.jdbc :as jdbc]
            [conman.core :as conman]
            [environ.core :refer [env]])
  (:import (clojure.lang IPersistentMap IPersistentVector)
           (java.sql Date PreparedStatement Timestamp)
           (org.postgresql.jdbc4 Jdbc4Array)
           (org.postgresql.util PGobject)))

(defonce ^:dynamic *conn* (atom nil))

;;(conman/bind-connection *conn* "sql/queries.sql")

(def pool-spec
  {:adapter    :postgresql
   :init-size  1
   :min-idle   1
   :max-idle   4
   :max-active 32})

(defn connect! []
  (conman/connect!
    *conn*
   (assoc
     pool-spec
     :jdbc-url (env :database-url))))

(defn disconnect! []
  (conman/disconnect! *conn*))

(defn to-date [sql-date]
  (-> sql-date (.getTime) (java.util.Date.)))

(extend-protocol jdbc/IResultSetReadColumn
  Date
  (result-set-read-column [v _ _] (to-date v))

  Timestamp
  (result-set-read-column [v _ _] (to-date v))

  Jdbc4Array
  (result-set-read-column [v _ _] (vec (.getArray v)))

  PGobject
  (result-set-read-column [pgobj _metadata _index]
    (let [type  (.getType pgobj)
          value (.getValue pgobj)]
      (case type
        "json" (parse-string value true)
        "jsonb" (parse-string value true)
        "citext" (str value)
        value))))

(extend-type java.util.Date
  jdbc/ISQLParameter
  (set-parameter [v ^PreparedStatement stmt idx]
    (.setTimestamp stmt idx (Timestamp. (.getTime v)))))

(defn to-pg-json [value]
  (doto (PGobject.)
    (.setType "jsonb")
    (.setValue (generate-string value))))

(extend-protocol jdbc/ISQLValue
  IPersistentMap
  (sql-value [value] (to-pg-json value))
  IPersistentVector
  (sql-value [value] (to-pg-json value)))
