# CVOnline source code

To build this project you need:
- `grunt` to build website
- `bower-installer` to manage web packages
- `bower` as bower-installer dependency 
- `nodeJs` as grunt and bower dependencies

## Install dev tools

In CLI, type the following to install npm dependencies:

     npm install

## Download web packages

In CLI, type the following to download web packages (bootstrap, jquery) to www/libs folder

     bower-installer
     
## Prod

Build web site with :

     grunt build

Everything you need for deployment is in `docs/` folder
