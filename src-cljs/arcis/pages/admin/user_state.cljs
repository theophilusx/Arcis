;;      Filename: user_state.cljs
;; Creation Date: Wednesday, 08 July 2015 02:28 PM AEST
;; Last Modified: Wednesday, 08 July 2015 04:20 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-state
  (:require [arcis.utils :as u]
            [ajax.core :refer [POST]]
            [reagent.session :as session]))

(defn handle-state-toggle-resp [response]
  (let [rsp (js->clj response :keywordize-keys true)]
    (if (= "success" (:status rsp))
      (u/report-success)
      (u/report-error (:message rsp)))))

(defn handle-state-toggle-error-resp [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Active state toggle error: " (:status ctx)
                 " " (:status-text ctx)
                 " " (:message rsp))]
    (.log js/console (str "handle-active-toggle-error-resp: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn handle-is-active-button-click [id]
  (let [dkw (u/digit-keyword id)
        state (session/get-in [(session/get :page) :users dkw :is-active])
        params (assoc (u/default-post-params)
                      :params {:id id
                               :active-state (not state)}
                      :handler #'handle-state-toggle-resp
                      :error-handler #'handle-state-toggle-error-resp)]
    (POST "/admin/change-state" params)))

(defn user-state-button [id v]
  [:button {:class (str "btn btn-block" (if v " btn-success" " btn-danger"))
            :type "button"
            :on-click #(handle-is-active-button-click id)}
   (if v "Yes" "No")])
