;;      Filename: user_state.cljs
;; Creation Date: Wednesday, 08 July 2015 02:28 PM AEST
;; Last Modified: Wednesday, 16 September 2015 06:44 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-state
  (:require [arcis.utils :as u]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.pages.components :as c]
            [ajax.core :refer [POST]]
            [reagent.session :as session]))

(defn handle-state-toggle-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (do
        (get-app-users)
        (u/report-success))
      (u/report-error (:message rsp)))))

(defn handle-is-active-button-click [id val]
  (let [params (assoc (u/default-post-params)
                      :params {:id id
                               :active-state val}
                      :handler #'handle-state-toggle-resp
                      :error-handler (u/default-error-response
                                       "handle-is-active-button-click"))]
    (POST "/admin/state" params)))

(defn user-state-button [id v]
  (c/toggle-button-component id v #'handle-is-active-button-click
                             {:true "Yes" :false "No"}))
