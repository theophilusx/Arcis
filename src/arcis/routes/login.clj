;;      Filename: login.clj
;; Creation Date: Saturday, 04 July 2015 12:23 PM AEST
;; Last Modified: Sunday, 20 September 2015 03:30 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.login
  (:require [arcis.layout :as layout]
            [arcis.db.users :as db]
            [arcis.middleware :refer [secret]]
            [buddy.hashers :as hashers]
            [buddy.sign.jwe :as jwe]
            [buddy.core.keys :as ks]
            [buddy.core.nonce :as nonce]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [clj-time.core :as time]
            [ring.util.http-response :as http-resp]
            [cheshire.core :refer [generate-string]]))

(defn valid-auth? [email password]
  (if-let [auth-data (first (db/get-user-by-email {:email email}))]
    (if (hashers/check password (:pass auth-data))
      [true (dissoc auth-data :pass)]
      [false "Incorrect password"])
    [false "Unknown user"]))

(defn authenticate-user [req]
  (let [email (get-in req [:params :email])
        password (get-in req [:params :pass])
        [ok? creds] (valid-auth? email password)]
    (if ok?
      (let [now (java.util.Date.)
            exp (time/plus (time/now) (time/seconds 3600))
            claims (assoc creds :exp exp)
            token (jwe/encrypt claims secret {:alg :a256kw :enc :a128gcm})]
        (db/update-last-login! {:email email :last now})
        (assoc (http-resp/ok
                (generate-string (assoc creds :token token)))
               :headers {"Content-Type" "application/json"}))
      (assoc (http-resp/forbidden
              (generate-string {:status-text "Authentication Failed"
                                :message creds}))
             :headers {"Content-Type" "application/json"}))))

