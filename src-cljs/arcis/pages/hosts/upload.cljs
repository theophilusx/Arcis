;;      Filename: upload.cljs
;; Creation Date: Monday, 20 July 2015 06:10 PM AEST
;; Last Modified: Sunday, 18 October 2015 01:09 PM AEDT
;;        Author: Tim Cross <theophilusx AT gmail.com>
;;   Description:
;;
(ns arcis.pages.hosts.upload
  (:require [arcis.utils :as u]
            [arcis.pages.components :as c]
            [arcis.pages.hosts.host-utils :refer [get-host-list]]
            [arcis.ajax :as ajax]
            [arcis.state :as state]))


(defn process-upload [response]
  (get-host-list))

(defn upload-file [element-id]
  (if (state/is-authenticated?)
    (let [el (.getElementById js/document element-id)
          name (.-name el)
          file (aget (.-files el) 0)
          form-data (doto
                        (js/FormData.)
                      (.append name file))]
      (ajax/post-it "upload-file" "/hosts/upload" form-data #'process-upload))
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
