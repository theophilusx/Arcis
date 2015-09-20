;;      Filename: user_state.cljs
;; Creation Date: Wednesday, 08 July 2015 02:28 PM AEST
;; Last Modified: Sunday, 20 September 2015 05:34 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;

(ns arcis.pages.admin.user-state
  (:require [arcis.utils :as u]
            [arcis.ajax :as ajax]
            [arcis.pages.admin.users-ajax :refer [get-app-users]]
            [arcis.pages.components :as c]
            [ajax.core :refer [POST]]
            [arcis.state :as state]))

(defn process-state-change [response]
  (get-app-users))

(defn handle-state-change [id val]
  (when (state/is-authenticated?)
    (let [params (assoc (ajax/default-post-params)
                        :params {:id id
                                 :active-state val}
                        :handler (ajax/default-handler "handle-state-change"
                                   #'process-state-change false)
                        :error-handler (ajax/default-error-handler
                                         "handle-state-change"))]
      (POST "/admin/state" params))))

(defn user-state-button [id v]
  (c/toggle-button-component id v #'handle-state-change
                             {:true "Yes" :false "No"}))
