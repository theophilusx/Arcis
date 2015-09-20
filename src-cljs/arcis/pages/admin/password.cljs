;;      Filename: password.cljs
;; Creation Date: Wednesday, 08 July 2015 02:20 PM AEST
;; Last Modified: Sunday, 20 September 2015 05:12 PM AEST
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

(defn pwd-change [response]
  (get-app-users))

(defn handle-pwd-change [pdata]
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-post-params)
                        :params {:id (:id @pdata)
                                 :password (:value @pdata)}
                        :handler (ajax/default-handler "handle-pwd-change"
                                   #'pwd-change true)
                        :error-handler (ajax/default-error-handler
                                         "handle-pwd-change"))]
      (POST "/admin/password" params)
      (swap! pdata assoc :value nil))))

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
