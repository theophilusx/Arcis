;;      Filename: home.clj
;; Creation Date: Saturday, 04 July 2015 12:19 PM AEST
;; Last Modified: Sunday, 05 July 2015 02:43 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.home
  (:require [arcis.layout :as layout]))

(defn home-page []
  (layout/render "home.html"))


