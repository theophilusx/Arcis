;;      Filename: utils.clj
;; Creation Date: Sunday, 05 July 2015 02:36 PM AEST
;; Last Modified: Sunday, 05 July 2015 02:38 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.utils
  (:require [buddy.hashers :as hashers]
            [cheshire.core :refer [generate-string]]
            [arcis.db.users :as udb]))

(defn encrypt [pwd]
  (hashers/encrypt pwd {:algorithm :pbkdf2+sha256}))

(defn handle-malformed-json-request [validation-map]
  (let [ks (keys validation-map)]
    (generate-string
     {:message (str "Malformed data submitted "
                    (reduce (fn [s k]
                              (str s " "
                                   (first (get validation-map k))))
                            "" ks))})))

(defn is-authorized? [allowed-roles role]
  (if (contains? allowed-roles role)
    true
    false))

(defn unauthenticated-msg [fname]
  (println (str fname ": user is not authenticated"))
  (generate-string {:status :not-authenticated
                    :message "User is not authenticated"}))

(defn unauthorized-msg [fname msg]
  (let [prefix "You are not authorised to "
        suffix ". This attempt has been logged."]
    (println (str fname " " prefix msg suffix))
    (generate-string {:status :not-authorised
                      :message (str prefix msg suffix)})))

(defn user-exists? [id]
  (if (= 1 (count (udb/get-user-by-id {:id id})))
    true
    false))