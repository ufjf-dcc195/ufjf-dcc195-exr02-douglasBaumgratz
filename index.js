var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.senha;

server.start(router.route, handlers);
