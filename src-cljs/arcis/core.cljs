(ns arcis.core
  (:require [arcis.pages.home :refer [home-page]]
            [arcis.pages.about :refer [about-page]]
            [arcis.pages.not-implemented :refer [not-implemented-page]]
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [reagent.cookies :as cookie]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]])
  (:import goog.History))

(defn navbar []
  [:div.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} "Arcis"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (when (= :home (session/get :page)) "active")}
       [:a {:href "#/"} "Home"]]
      [:li {:class (when (= :about (session/get :page)) "active")}
       [:a {:href "#/about"} "About"]]
      [:li {:class (when (= :hosts (session/get :page)) "active")}
       [:a {:href "#/hosts"} "Hosts"]]
      [:li {:class (when (= :scans (session/get :page)) "active")}
       [:a {:href "#/scans"} "Scans"]]
      [:li {:class (when (= :incidents (session/get :page)) "active")}
       [:a {:href "#/incidents"} "Incidents"]]
      (if (= "Admin" (session/get-in [:user-data :role]))
        [:li {:class (when (= :admin (session/get :page)) "active")}
         [:a {:href "#/admin"} "Admin"]])]
     [:ul.nav.navbar-nav.navbar-right
      [:li.dropdown
       [:a {:class "dropdown-toggle" :data-toggle "dropdown"
            :role "button"}
        (str (session/get-in [:user-data :first-name]) " "
             (session/get-in [:user-data :last-name]))
        [:span {:class "caret"}]]
       [:ul {:class "dropdown-menu" :role "menu"}
        [:li [:a {:href "/logout"} "Logout"]]]]]]]])

(def pages
  {:home #'home-page
   :about #'about-page
   :hosts #'not-implemented-page
   :scans #'not-implemented-page
   :incidents #'not-implemented-page
   :admin #'not-implemented-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

(secretary/defroute "/about" []
  (session/put! :page :about))

(secretary/defroute "/hosts" []
  (session/put! :page :hosts))

(secretary/defroute "/scans" []
  (session/put! :page :scans))

(secretary/defroute "/incidents" []
  (session/put! :page :incidents))

(secretary/defroute "/admin" []
  (session/put! :page :admin))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn get-user-data []
  (if-let [raw-data (cookie/get :user-data)]
    (let [xs (clojure.string/split raw-data #"\&")
          user-data (reduce (fn [m x]
                              (let [[n v] (clojure.string/split x #"=")]
                                (assoc m (keyword n)
                                       (js/decodeURIComponent v)))) {} xs)]
      (.log js/console (str "User: " user-data))
      (session/put! :user-data user-data))
    (session/put! :user-data {:email "Unknown"
                              :first-name "Unknown"
                              :last-name "Unknown"
                              :role "Unknown"})))

(defn mount-components []
  (reagent/render-component [#'navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [#'page] (.getElementById js/document "app")))

(defn init! []
  (get-user-data)
  (hook-browser-navigation!)
  (session/put! :page :home)
  (mount-components))


