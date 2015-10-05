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


(defn nav-link [uri title page collapsed?]
  [:li {:class (when (= page (session/get :page)) "active")}
   [:a {:href uri
        :on-click (fn []
                    (reset! collapsed? true)
                    nil)}
    title]])

(defn navbar []
  (let [collapsed? (atom true)]
    (fn []
      [:nav.navbar.navbar-inverse.navbar-fixed-top
       [:div.container
        [:div.navbar-header
         [:button.navbar-toggle
          {:class         (when-not @collapsed? "collapsed")
           :data-toggle   "collapse"
           :aria-expanded @collapsed?
           :aria-controls "navbar"
           :on-click      (fn []
                            (swap! collapsed? not)
                            nil)}
          [:span.sr-only "Toggle Navigation"]
          [:span.icon-bar]
          [:span.icon-bar]
          [:span.icon-bar]]
         [:a.navbar-brand {:href "#/"} [:img {:src "img/logo_small.png"
                                              :class "image-responsive"}]]]
        [:div.navbar-collapse.collapse
         (when-not @collapsed? {:class "in"})
         [:ul.nav.navbar-nav
          [nav-link "#/" "Home" :home collapsed?]
          [nav-link "#/about" "About" :about collapsed?]
          [nav-link "#/hosts" "Hosts" :hosts collapsed?]
          [nav-link "#/scans" "Scans" :scans collapsed?]
          [nav-link "#/incidents" "Incidents" :incidents collapsed?]
          (when (= "Admin" (state/value-in [:user-data :user_role]))
            [nav-link "#/admin" "Admin" :admin collapsed?])]
         (when (state/is-authenticated?)
           [:ul.nav.navbar-nav.navbar-right
            [:li.dropdown
             [:a {:class "dropdown-toggle" :data-toggle "dropdown"
                  :role "button"}
              (str (state/value-in [:user-data :first_name]) " "
                   (state/value-in [:user-data :last_name]))
              [:span {:class "caret"}]]
             [:ul {:class "dropdown-menu" :role "menu"}
              [:li [:a {:href "#/password"} "Change Password"]]
              [:li [:a {:on-click #(state/set-value! :user-data nil)}
                    "Logout"]]]]])]]])))



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


