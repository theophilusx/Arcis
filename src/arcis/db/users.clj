;;      Filename: users.clj
;; Creation Date: Saturday, 04 July 2015 12:26 PM AEST
;; Last Modified: Thursday, 09 July 2015 01:14 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.db.users
  (:require [yesql.core :refer [defqueries]]
            [arcis.db.core :refer [db-spec]]))

(defqueries "sql/users.sql" {:connection db-spec})

(if (= 0 (count (get-user-by-email {:email "theophilusx@gmail.com"})))
  (create-user! {:first_name "Tim"
                 :last_name "Cross"
                 :email "theophilusx@gmail.com"
                 :user_role "Admin"
                 :is_active true
                 :pass "pbkdf2+sha256$aa14aa84277ae03748e89e93$100000$83fcc9bb3bfc27fb7f9946e975e86f45e42804ae"}))
