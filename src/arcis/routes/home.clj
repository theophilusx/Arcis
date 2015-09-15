;;      Filename: home.clj
;; Creation Date: Saturday, 04 July 2015 12:19 PM AEST
;; Last Modified: Tuesday, 15 September 2015 11:59 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.home
  (:require [arcis.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :refer [ok]]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))
