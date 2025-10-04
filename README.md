# heartbeat
A remote http server hearthbeat test useful for applications that sometimes can go offline - [Frameworkless](https://github.com/frameworkless-movement/manifesto)

## How does it work?
Simply uses the setTimeout for testing a remote document availability via XMLHttpRequest, and it calls a callback function for each beat, and another callback if the remote document is not available.

## Syntax?
heartbeat is self explanatory for any junior developer, please take a look to the example.

