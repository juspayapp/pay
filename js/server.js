var http = require('http');
var router = require('./router.js');
var socket = require('./socket.js');
var port = process.env.PORT || 5000;
var app = function(req, res) {
  router(req, res);
};

var server = http.createServer(app);
server.listen(port);
console.log('server listening on port', port);
socket(server);
// pusher.updateMeal();
