(defproject arcis "0.1.0-SNAPSHOT"

  :description "An information security tool written in Clojure"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [selmer "0.9.3"]
                 [com.taoensso/timbre "4.1.4"]
                 [com.taoensso/tower "3.0.2"]
                 ;;[markdown-clj "0.9.74"]
                 [environ "1.0.1"]
                 [compojure "1.4.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.1.5"]
                 [ring "1.4.0"
                  :exclusions [ring/ring-jetty-adapter]]
                 [liberator "0.13"]
                 [cheshire "5.5.0"]
                 [metosin/ring-middleware-format "0.6.0"]
                 [metosin/ring-http-response "0.6.5"]
                 [bouncer "0.3.3"]
                 [prone "0.8.2"]
                 [org.clojure/tools.nrepl "0.2.11"]
                 [org.webjars/bootstrap "3.3.5"]
                 [org.webjars/jquery "2.1.4"]
                 [org.webjars/font-awesome "4.4.0"]
                 [buddy "0.7.2"]
                 [migratus "0.8.7"]
                 [clj-time "0.11.0"]
                 [conman "0.2.3"]
                 [org.postgresql/postgresql "9.4-1203-jdbc41"]
                 [org.clojure/clojurescript "1.7.145" :scope "provided"]
                 [org.clojure/tools.reader "0.10.0"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.13"]
                 [reagent-utils "0.1.5"]
                 [secretary "1.2.3"]
                 [org.clojure/core.async "0.2.371"]
                 [cljs-ajax "0.5.1"]
                 [org.immutant/web "2.1.0"]
                 [org.clojars.frozenlock/reagent-modals "0.2.3"]
                 [org.clojure/data.csv "0.1.3"]]

  :min-lein-version "2.0.0"
  :uberjar-name "arcis.jar"
  :jvm-opts ["-server"]

  :main arcis.core
  :migratus {:store :database}

  :plugins [[lein-environ "1.0.1"]
            [migratus-lein "0.2.0"]
            [lein-cljsbuild "1.1.0"]]

  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :app :compiler
                                     :output-dir]
                                    [:cljsbuild :builds :app :compiler
                                     :output-to]]

  :cljsbuild
  {:builds
   {:app
    {:source-paths ["src-cljs"]
     :compiler
     {:output-to "resources/public/js/app.js"
      :output-dir "resources/public/js/out"
      :externs ["react/externs/react.js"]
      :pretty-print true}}}}

  :profiles
  {:uberjar {:omit-source true
             :env {:production true}
              :hooks [leiningen.cljsbuild]
              :cljsbuild
              {:jar true
               :builds
               {:app
                {:source-paths ["env/prod/cljs"]
                 :compiler {:optimizations :advanced :pretty-print false}}}}

             :aot :all}
   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]
   :project/dev  {:dependencies [[ring/ring-mock "0.3.0"]
                                 [ring/ring-devel "1.4.0"]
                                 [pjstadig/humane-test-output "0.7.0"]
                                 [lein-figwheel "0.4.1"]
                                 [mvxcvi/puget "1.0.0"]
                                 [com.cemerick/piggieback "0.2.1"]]
                  :plugins [[lein-figwheel "0.4.1"]]
                  :cljsbuild
                  {:builds
                    {:app
                     {:source-paths ["env/dev/cljs"]
                      :compiler {:optimizations :none
                                 :source-map true}}}}

                  :figwheel
                  {:http-server-root "public"
                   :server-port 3449
                   :nrepl-port 7002
                   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
                   :css-dirs ["resources/public/css"]
                   :ring-handler arcis.handler/app}

                  :repl-options {:init-ns arcis.core}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]
                  ;;when :nrepl-port is set the application starts the nREPL
                  ;;server on load
                  :env {:dev        true
                        :port       3000
                        :nrepl-port 7000}}
   :project/test {:env {:test       true
                        :port       3001
                        :nrepl-port 7001}}
   :profiles/dev {}
   :profiles/test {}})
