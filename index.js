var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.senha;
handlers["/oculto.html"] = requestHandlers.senha;

server.start(router.route, handlers);
