;;      Filename: upload.cljs
;; Creation Date: Monday, 20 July 2015 06:10 PM AEST
;; Last Modified: Sunday, 20 September 2015 05:44 PM AEST
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.upload
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.hosts-ajax :refer [get-host-list]]
            [ajax.core :refer [POST]]
            [arcis.ajax :as ajax]
            [arcis.state :as state]))


(defn process-upload [response]
  (get-host-list))

(defn upload-file [element-id]
  (when (state/is-authenticated?)
    (let [el (.getElementById js/document element-id)
          name (.-name el)
          file (aget (.-files el) 0)
          form-data (doto
                        (js/FormData.)
                      (.append name file))
          params (assoc (ajax/default-post-params)
                        :handler (ajax/default-handler "upload-file"
                                   #'process-upload true)
                        :error-handler (ajax/default-error-handler
                                         "upload-file"))]
      (POST "/hosts/upload" params))))

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
