;;      Filename: upload.cljs
;; Creation Date: Monday, 20 July 2015 06:10 PM AEST
;; Last Modified: Saturday, 01 August 2015 04:57 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.upload
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [ajax.core :refer [POST]]))


(defn upload-resp [resp]
  (let [rsp (js->clj resp :keywordize-keys true)]
    (.log js/console (str "upload-resp: " rsp))
    (u/report-success (:message rsp))))

(defn upload-resp-error [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)
        msg (str "File upload error: " (:status ctx)
                 " CTX: " (:status-text ctx)
                 " RSP: " (:status rsp)
                 " " (:message rsp))]
    (.log js/console (str "upload-resp-error: " ctx))
    (if (u/expired-session? (:status ctx) (:status rsp))
      (u/report-expired-session)
      (u/report-error msg))))

(defn upload-file [element-id]
  (let [el (.getElementById js/document element-id)
        name (.-name el)
        file (aget (.-files el) 0)
        form-data (doto
                      (js/FormData.)
                    (.append name file))]
    (POST "/hosts/upload" {:params form-data
                           :response-format :json
                           :keywords? true
                           :handler upload-resp
                           :error-handler upload-resp-error})))

(defn host-upload-component []
  [:div.form-inline
   [:br]
   [:div.form-group
    [:label {:for "upload-file"} "Upload File: "
     [:input {:type "file"
              :name "upload-file"
              :id "upload-file"
              :class "form-control"}]]]
   [:button {:class "btn btn-primary" :type "button"
             :on-click #(upload-file "upload-file")} "Upload"]])
