# Arcis Security

*Arcis Security* is an application to assist in managing the information required to
perform standard Information Security processes. Exactly what this means will evolve
as the tool is used. The initial focus will be on information gathering. Later
functionality will focus on how to use the information to assist in risk analysis,
auditing of security controls, modelling of system and service architecture, data
governance and change management processes.

Initial functionality includes

+ **Host Database** List of hosts which includes their IP address and DNS
   name. Initially, this data will be obtained by reading in the data from a CSV
   file to facilitate extracting this information from other host management
   systems used to manage DNS records.

+ **Scan Database** This represents a summary of Nessus Vulnerability scans
   obtained by loading Nessus reports in XML format. 

+ **Incident Reports** Security event and incident database consisting of event and
   incident records, including investigation and actions taken  

Future planned functionality includes

+ **Service Catalogue** Database of high level service definitions and dependencies

+ **CIA Classification** Set the confidentiality, integrity and availability
   requirements for services and hosts

+ **Data Classificaiton** Show the data classification associated with data
   managed by different services

+ **Control Lists** List of the controls used for each service. Shows an
   estimated level for confidentiality, integrity and availability

and more as I think of it!

## Status

This software is still very much in development. In fact, the only completed part is
the basic user management components.

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

The application uses PostgreSQL as the backend database.

The application uses various web client functionality which is only supported under
Chrome and Firefox. Internet Explorer is not supported.

In production environments, the application should only support HTTPS
connections. However, during development, the application is only using HTTP.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein ring server

To start the Figwheel service for compiling and loading ClojureScript files, run

    leini figwheel

To run a repl which can be used to connect from cider, run

lein repl

## License

Copyright © 2015 Tim Cross

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
