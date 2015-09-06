;;      Filename: password.cljs
;; Creation Date: Wednesday, 08 July 2015 02:20 PM AEST
;; Last Modified: Sunday, 06 September 2015 07:43 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.password
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [ajax.core :refer [POST]]
            [reagent.core :refer [atom]]
            [reagent.session :as session]))

(defn handle-pwd-change-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success (:message rsp))
      (u/report-error (:message rsp)))))

(defn handle-pwd-change-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Password change error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console msg)
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn handle-pwd-change [pdata]
  (let [params (assoc (u/default-post-params)
                      :params {:id (:id @pdata)
                               :password (:value @pdata)}
                      :handler #'handle-pwd-change-resp
                      :error-handler #'handle-pwd-change-error-resp)]
    (POST "/admin/password" params)
    (swap! pdata assoc :value nil)))

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
