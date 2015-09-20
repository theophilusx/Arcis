;;      Filename: password.cljs
;; Creation Date: Wednesday, 08 July 2015 02:20 PM AEST
;; Last Modified: Sunday, 20 September 2015 01:13 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.admin.password
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [ajax.core :refer [POST]]
            [reagent.core :refer [atom]]
            [arcis.state :as state]))

(defn handle-pwd-change-resp [response]
  (if (= "success" (:status response))
    (u/report-success (:message response))
    (u/report-error (:message response))))

(defn handle-pwd-change [pdata]
  (when (state/is-authenticated?)
    (let [params (assoc (u/default-post-params)
                        :params {:id (:id @pdata)
                                 :password (:value @pdata)}
                        :handler #'handle-pwd-change-resp
                        :error-handler (u/default-error-response
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
