;;      Filename: login.clj
;; Creation Date: Saturday, 04 July 2015 05:17 PM AEST
;; Last Modified: Saturday, 04 July 2015 05:17 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.test.login
  (:require [clojure.test :refer :all]
            [arcis.routes.login :refer :all]))

(deftest test-login
  (testing "testing valid auth"
    (let [rslt (valid-auth? "theophilusx@gmail.com" "Dev:100Arcis")]
      (is (= true (first rslt)))
      (is (= 1 (:id (second rslt))))))
  (testing "testing invalid username"
    (let [rslt (valid-auth? "nobody@example.com" "boguspassword")]
      (is (= false (first rslt)))
      (is (= "Unknown user" (second rslt)))))
  (testing "testing invalid password"
    (let [rslt (valid-auth? "theophilusx@gmail.com" "boguspassword")]
      (is (= false (first rslt)))
      (is (= "Incorrect password" (second rslt))))))
