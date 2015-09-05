(defproject arcis "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [selmer "0.9.1"]
                 [com.taoensso/timbre "4.1.1"]
                 [com.taoensso/tower "3.0.2"]
                 [markdown-clj "0.9.69"]
                 [environ "1.0.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-session-timeout "0.1.0"]
                 [liberator "0.13"]
                 [cheshire "5.5.0"]
                 [metosin/ring-middleware-format "0.6.0"]
                 [metosin/ring-http-response "0.6.5"]
                 [bouncer "0.3.3"]
                 [prone "0.8.2"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [ring-server "0.4.0"]
                 [buddy "0.6.2"]
                 [migratus "0.8.4"]
                 [clj-time "0.11.0"]
                 [org.clojure/java.jdbc "0.4.1"]
                 [instaparse "1.4.1"]
                 [yesql "0.5.0"]
                 [org.postgresql/postgresql "9.3-1102-jdbc41"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]
                 [org.clojure/tools.reader "0.9.2"]
                 [reagent "0.5.0"]
                 [cljsjs/react "0.13.3-1"]
                 [reagent-forms "0.5.7"]
                 [reagent-utils "0.1.5"]
                 [org.clojars.frozenlock/reagent-modals "0.2.3"]
                 [secretary "1.2.3"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljs-ajax "0.3.14"]
                 [org.clojure/data.csv "0.1.3"]]

  :min-lein-version "2.0.0"
  :uberjar-name "arcis.jar"
  :jvm-opts ["-server"]

  ;;enable to start the nREPL server when the application launches
                                        ;:env {:repl-port 7001}

  :main arcis.core
  :migratus {:store :database}

  :plugins [[lein-ring "0.9.6"]
            [lein-environ "1.0.0"]
            [migratus-lein "0.1.7"]
            [lein-cljsbuild "1.1.0"]]
  

  
  :ring {:handler arcis.handler/app
         :init    arcis.handler/init
         :destroy arcis.handler/destroy
         :uberwar-name "arcis.war"}

  :clean-targets ^{:protect false} ["target" "resources/public/js"]
  
  :cljsbuild
  {:builds
   {:app
    {:source-paths ["src-cljs"]
     :compiler
     {:output-dir "resources/public/js/out"
      :externs ["react/externs/react.js"]
      :optimizations :none
      :output-to "resources/public/js/app.js"
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
   :dev {:dependencies [[ring-mock "0.1.5"]
                        [ring/ring-devel "1.4.0"]
                        [pjstadig/humane-test-output "0.7.0"]
                        [lein-figwheel "0.3.9"]
                        [org.clojure/tools.nrepl "0.2.10"]]
         :plugins [[lein-figwheel "0.3.9"]]
         :cljsbuild
         {:builds
          {:app
           {:source-paths ["env/dev/cljs"] :compiler {:source-map true}}}} 
         
         :figwheel
         {:http-server-root "public"
          :server-port 3449
          :nrepl-port 7002
          :css-dirs ["resources/public/css"]
          :ring-handler arcis.handler/app}
         
         :repl-options {:init-ns arcis.core}
         :injections [(require 'pjstadig.humane-test-output)
                      (pjstadig.humane-test-output/activate!)]
         :env {:dev true}}})
