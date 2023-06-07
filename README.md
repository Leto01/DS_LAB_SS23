# Distributed Systems Lab

This project is a test on how fast you can build an API 
connected to an postgres DB running in a Docker-Continer.


## Build process:

Initialize Project: **Terminal** > cds init <projectName>
Move into db/ Folder: add Models.cds file, define namespace and entities.
Move into srv/ folder: add myService.cds file, define service with path.
First start of application: **Terminal** > cds watch
Note that you can not start the application without a service and a entity.


OPTIONAL:
For customizing the api endpoints, you can add a .js file, that just needs the 
same Name as the corosponding service-file. In this case it would look like this:

srv/
    myService.cds
    myService.js
--------------------------------------------------------------------------------

## Getting Started with SAP CAP

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
