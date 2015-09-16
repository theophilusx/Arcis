;;      Filename: upload.cljs
;; Creation Date: Monday, 20 July 2015 06:10 PM AEST
;; Last Modified: Wednesday, 16 September 2015 06:47 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.upload
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.hosts-ajax :refer [get-host-list]]
            [ajax.core :refer [POST]]
            [reagent.session :as session]))


(defn upload-resp [resp]
  (let [rsp (js->clj resp :keywordize-keys true)]
    (.log js/console (str "upload-resp: " rsp))
    (u/report-success (:message rsp))
    (get-host-list)))

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
                           :error-handler (u/default-error-response
                                            "upload-file")})))

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
