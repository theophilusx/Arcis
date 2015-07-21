;;      Filename: upload.cljs
;; Creation Date: Monday, 20 July 2015 06:10 PM AEST
;; Last Modified: Tuesday, 21 July 2015 07:15 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.upload
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [ajax.core :refer [POST]]))


(defn upload-resp [resp]
  (let [rsp (js->clj resp :keywordize-keys true)]
    (.log js/console (str "upload-resp: " rsp))))

(defn upload-resp-error [ctx]
  (let [rsp (js->clj (:response ctx) :keywordize-keys true)]
    (.log js/console (str "upload-resp-error: " ctx))))

(defn upload-file [element-id]
  (let [el (.getElementById js/document element-id)
        name (.-name el)
        file (aget (.-files el) 0)
        form-data (doto
                      (js/FormData.)
                    (.append name file))]
    (POST "/upload" {:params form-data
                     :response-format :json
                     :keywords? true
                     :handler upload-resp
                     :error-handler upload-resp-error})))

(defn host-upload-component []
  [:div
   [:form {:id "upload-form"
           :enc-type "multipart/form-data"
           :method "POST"}
    [:labe "Upload Filename: "]
    [:input {:type "file"
             :name "upload-file"
             :id "upload-file"}]
    [:button {:class "btn btn-primary" :type "button"
              :on-click #(upload-file "upload-file")} "Upload"]]])
