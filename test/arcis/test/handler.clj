;;      Filename: handler.clj
;; Creation Date: Saturday, 04 July 2015 05:17 PM AEST
;; Last Modified: Saturday, 04 July 2015 05:22 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.test.handler
  (:require [clojure.test :refer :all]
            [ring.mock.request :refer :all]
            [arcis.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (request :get "/"))]
      (is (= 302 (:status response)))))

  (testing "not-found route"
    (let [response (app (request :get "/invalid"))]
      (is (= 404 (:status response))))))
