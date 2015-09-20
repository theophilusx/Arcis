(ns arcis.core
  (:require [arcis.state :as state]
            [arcis.pages.home :refer [home-page]]
            [arcis.pages.about :refer [about-page]]
            [arcis.pages.not-implemented :refer [not-implemented-page]]
            [arcis.pages.admin.main :refer [admin-page]]
            [arcis.pages.hosts.main :refer [hosts-page]]
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
  [:div.navbar.navbar-fixed-top.navbar-inverse
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} [:img {:src "img/logo_small.png"
                                          :class "imgage-responsive"}]]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (when (= :home (state/value-of :page)) "active")}
       [:a {:href "#/"} "Home"]]
      [:li {:class (when (= :about (state/value-of :page)) "active")}
       [:a {:href "#/about"} "About"]]
      [:li {:class (when (= :hosts (state/value-of :page)) "active")}
       [:a {:href "#/hosts"} "Hosts"]]
      [:li {:class (when (= :scans (state/value-of :page)) "active")}
       [:a {:href "#/scans"} "Scans"]]
      [:li {:class (when (= :incidents (state/value-of :page)) "active")}
       [:a {:href "#/incidents"} "Incidents"]]
      (if (= "Admin" (state/value-in [:user-data :user_role]))
        [:li {:class (when (= :admin (state/value-of :page)) "active")}
         [:a {:href "#/admin"} "Admin"]])]
     [:ul.nav.navbar-nav.navbar-right
      [:li.dropdown
       [:a {:class "dropdown-toggle" :data-toggle "dropdown"
            :role "button"}
        (str (state/value-in [:user-data :first_name]) " "
             (state/value-in [:user-data :last_name]))
        [:span {:class "caret"}]]
       [:ul {:class "dropdown-menu" :role "menu"}
        [:li [:a {:href "#/password"} "Change Password"]]
        [:li [:a {:on-click #(state/set-value! :user-data {})}
              "Logout"]]]]]]]])

(def pages
  {:home #'home-page
   :about #'about-page
   :hosts #'hosts-page
   :scans #'not-implemented-page
   :incidents #'not-implemented-page
   :admin #'admin-page})

(defn page []
  [(pages (state/this-page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (state/set-page! :home))

(secretary/defroute "/about" []
  (state/set-page! :about))

(secretary/defroute "/hosts" []
  (state/set-page! :hosts))

(secretary/defroute "/scans" []
  (state/set-page! :scans))

(secretary/defroute "/incidents" []
  (state/set-page! :incidents))

(secretary/defroute "/admin" []
  (state/set-page! :admin))

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

;; (defn get-user-data []
;;   (if-let [raw-data (cookie/get :user-data)]
;;     (let [xs (clojure.string/split raw-data #"\&")
;;           user-data (reduce (fn [m x]
;;                               (let [[n v] (clojure.string/split x #"=")]
;;                                 (assoc m (keyword n)
;;                                        (js/decodeURIComponent v)))) {} xs)]
;;       (.log js/console (str "User: " user-data))
;;       (session/put! :user-data user-data))
;;     (session/put! :user-data {:email "Unknown"
;;                               :first-name "Unknown"
;;                               :last-name "Unknown"
;;                               :role "Unknown"})))

(defn mount-components []
  (reagent/render-component [#'navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [#'page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (state/set-page! :home)
  (mount-components))


