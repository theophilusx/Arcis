;;      Filename: upload.cljs
;; Creation Date: Monday, 20 July 2015 06:10 PM AEST
;; Last Modified: Friday, 30 October 2015 04:30 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.upload
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.host-utils :refer [get-host-list]]
            ;;[arcis.ajax :as ajax]
            [ajax.core :refer [POST]]
            [arcis.state :as state]))

(defn upload-error [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "Error: " (:status ctx) " " (:status-text rsp)
                 " " (:message rsp))]
    (if (u/expired-session? (:status ctx) (:status-text rsp))
      (u/report-expired-session)
      (u/report-error "upload-error" msg))))

(defn process-upload [response]
  (u/report-success (:message response))
  (get-host-list))

(defn upload-file [element-id]
  (if (state/is-authenticated?)
    (let [token (state/value-in [:user-data :token])
          el (.getElementById js/document element-id)
          name (.-name el)
          file (aget (.-files el) 0)
          form-data (doto
                        (js/FormData.)
                      (.append name file))]
      ;;(ajax/post-it "upload-file" "/hosts/upload" form-data #'process-upload)
      (POST "/hosts/upload" {:body form-data
                             :response-format :json
                             :keywords? true
                             :headers {"Authorization" (str "Token " token)}
                             :handler #'process-upload
                             :error-handler #'upload-error})
      )
    (u/report-unauthenticated "upload-file")))

(defn host-upload-component []
  [:div.col-md-12
   [:div.form-inline
    [:br]
    [:div.form-group
     [:label {:for "upload-file"} "Upload File: "
      [:input {:type "file"
               :name "upload-file"
               :id "upload-file"
               :class "form-control"}]]]
    [:button {:class "btn btn-primary" :type "button"
              :on-click #(upload-file "upload-file")} "Upload"]]])
