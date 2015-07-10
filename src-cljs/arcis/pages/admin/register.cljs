;;      Filename: register.cljs
;; Creation Date: Sunday, 19 April 2015 02:44 PM AEST
;; Last Modified: Friday, 10 July 2015 02:58 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.register
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [reagent.session :as session]
            [ajax.core :refer [GET POST]]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [arcis.debug :as debug]
            [arcis.pages.components :as c]
            [arcis.utils :as u]))

(def register-template
  [:div.row
   [:div.col-md-8
    [:br]
    (c/input "First Name" :text :first-name)
    (c/input "Last Name" :text :last-name)
    (c/input "Email" :text :email)
    (c/input "Password" :password :pass)
    (c/input "Confirm" :password :pass2)]])

(defn not-valid? [user]
  (let [vmap (first (b/validate user
                                :first-name v/required
                                :last-name v/required
                                :email v/email
                                :pass [v/required [v/min-count 8]]
                                :pass2 v/required))]
    (if (nil? vmap)
      false
      vmap)))

(defn registration-resp [user]
  (fn [response]
    (let [rsp (js->clj response :keywordize-keys true)
          status (:status rsp)]
      (cond
        (= "success" status) (do
                               (u/report-success (:message rsp)))
        (= "duplicate" status) (do
                                 (u/report-error (:message rsp)))
        :else (do
                (.log js/console (str "registration-resp: :else " status))
                (u/report-error (:message rsp)))))))

(defn registration-error-resp [user]
  (fn [ctx]
    (let [rsp (js->clj (:response ctx) :keywordize-keys true)
          msg (str "AJAX Error: " (:status ctx) " "
                   (:status-text ctx) " "
                   (:message rsp))]
      (.log js/console (str "registration-error-resp: " ctx))
      (if (u/expired-session? (:status ctx) (:status rsp))
        (u/report-expired-session)
        (u/report-error msg)))))

(defn post-user [user]
  (let [params (assoc (u/default-post-params)
                      :params (dissoc @user :pass2)
                      :handler (registration-resp user)
                      :error-handler (registration-error-resp user))]
    (POST "/admin/register" params)))


(defn register-component []
  (let [user (atom {})]
    (fn []
      [:div
       [bind-fields register-template user]
       [:button.btn.btn-primary
        {:type "submit"
         :on-click (fn []
                     (if-let [e (not-valid? @user)]
                       (swap! user assoc :error
                              (u/validation-error-msg e))
                       (post-user user)))}
        "Register"]])))


