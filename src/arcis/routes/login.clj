;;      Filename: login.clj
;; Creation Date: Saturday, 04 July 2015 12:23 PM AEST
;; Last Modified: Thursday, 09 July 2015 12:32 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.routes.login
  (:require [arcis.layout :as layout]
            [ring.util.response :refer [response redirect set-cookie]]
            [arcis.db.users :as db]
            [buddy.hashers :as hashers]))

(defn valid-auth? [email password]
  (if-let [auth-data (first (db/get-user-by-email {:email email}))]
    (if (hashers/check password (:pass auth-data))
      [true (dissoc auth-data :pass)]
      [false "Incorrect password"])
    [false "Unknown user"]))

(defn authenticate-user [req]
  (let [email (get-in req [:params :email])
        password (get-in req [:params :password])
        next-url (or (get-in req [:params :next]) "/")
        auth-data (valid-auth? email password)]
    (if (first auth-data)
      (let [now (java.util.Date.)
            first-name (:first_name (second auth-data))
            last-name (:last_name (second auth-data))
            user-role (:user_role (second auth-data))
            updated-session (assoc  (:session req)
                                    :identity (keyword email)
                                    :identity-role (keyword user-role))
            cookie {:user-data {:value {:email email
                                        :first-name first-name
                                        :last-name last-name
                                        :role user-role}
                                :max-age (* 60 30)
                                :http-only false}}]
        (println (str "login date: email: " email " date: " now))
        (db/update-last-login! {:email email :last now})
        (-> (redirect next-url)
            (assoc :session updated-session)
            (assoc :cookies cookie)))
      (layout/render "login.html" {:msg (second auth-data)}))))

(defn login-page [next]
  (layout/render "login.html" {:next (or next "/")}))

(defn logout [request]
  (-> (redirect "/login")
      (assoc :session {})
      (assoc :cookies {})))


