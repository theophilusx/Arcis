;;      Filename: password.cljs
;; Creation Date: Wednesday, 08 July 2015 02:20 PM AEST
;; Last Modified: Friday, 25 September 2015 10:08 AM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.password
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.ajax :as ajax]
            [ajax.core :refer [POST]]
            [reagent.core :refer [atom]]
            [arcis.state :as state]))

(defn pwd-change [data]
  (fn [response]
    (get-app-users)
    (swap! data assoc :value nil)))

(defn handle-pwd-change [pdata]
  (if (state/is-authenticated?)
    (ajax/post-it "handle-pwd-change" "/admin/password"
                  {:id (:id @pdata) :password (:value @pdata)}
                  (pwd-change pdata))
    (u/report-unauthenticated "handle-pwd-change")))

(defn password-component [id]
  [c/inline-text-field-component id #'handle-pwd-change])

;; (defn password-component [id]
;;   (let [pwd-data (atom {:id id
;;                         :pwd nil})]
;;     (fn []
;;       [:div.form-inline
;;        [:input {:class "form-control"
;;                 :type "text"
;;                 :value (:pwd @pwd-data)
;;                 :on-change
;;                 #(swap! pwd-data assoc-in [:pwd] (-> % .-target .-value))}]
;;        [:button {:class "btn btn-primary"
;;                  :type "button"
;;                  :on-click (fn []
;;                              (handle-pwd-change pwd-data))}
;;         "Change"]])))
