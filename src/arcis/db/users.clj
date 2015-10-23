;;      Filename: users.clj
;; Creation Date: Saturday, 04 July 2015 12:26 PM AEST
;; Last Modified: Tuesday, 15 September 2015 12:16 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.db.users
  (:require [arcis.db.core :refer [*conn*]]
            [conman.core :as conman]))

(conman/bind-connection *conn* "sql/users.sql")

(defn user-exists? [id]
  (if (= 1 (count (get-user-by-id {:id id})))
    true
    false))
