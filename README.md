# Distributed Systems Lab

This project is a test on how fast you can build an API 
connected to an postgres DB running in a Docker-Continer.

# Start it up

In order to start this project, clone this project, navigate into the Root-folder 
and run **Terminal** docker compose up

This will pull the images stored on my docker hub and start up the application.
The frontend is reachable under http://localhost:5173

If you want to build the images on your own, run these commands:
**Terminal**DS_LAB_SS23>DATABASE> docker build -t <imagename_DATABASE> .
**Terminal**DS_LAB_SS23>SERVER> docker build -t <imagename_SERVER> .
**Terminal**DS_LAB_SS23>FRONTEND> docker build -t <imagename_FRONTEND> .

then change the docker-compose.yml in the root folder, and change the used images to your localy build images.

## Build process:

Initialize Project: **Terminal** > cds init <projectName>
Move into db/ Folder: add Models.cds file, define namespace and entities.
Move into srv/ folder: add myService.cds file, define service with path.
First start of application: **Terminal** > cds watch
Note that you can not start the application without a service and a entity.


OPTIONAL:
For customizing the api endpoints, you can add a .js file, that just needs the 
same Name as the corosponding service-file. In this case it would look like this:

On default, SAP CAP initializes a in memory db. In order to persist Data, there is a file for that:
/DATABASE/my.db
It is unused. I wanted to try something new, after working SAP CAP with a HANA DB and SQLite3 DB, i 
wanted to use a Postgres DB. Works like a charm ;D
    
srv/
    myService.cds
    myService.js
--------------------------------------------------------------------------------

## Getting Started with SAP CAP
### File /SERVER/
Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


### Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


### Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
# DS_LAB_SS23
