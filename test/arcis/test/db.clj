;;      Filename: db.clj
;; Creation Date: Saturday, 04 July 2015 02:06 PM AEST
;; Last Modified: Saturday, 04 July 2015 03:11 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.test.db
  (:require [clojure.test :refer :all]
            [arcis.db.users :as db]))

(deftest test-query
  (testing "user query by email"
    (let [rslt (first (db/get-user-by-email {:email "theophilusx@gmail.com"}))]
      (is (= 1 (:id rslt)))
      (is (= "theophilusx@gmail.com" (:email rslt)))
      (is (= "Tim" (:first_name rslt)))
      (is (= "Cross" (:last_name rslt))))))

