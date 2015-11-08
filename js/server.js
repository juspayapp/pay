var http = require('http');
var router = require('./router.js');
// var pusher = require('./pusher.js');
var port = process.env.PORT || 5000;
var app = function(req, res) {
  router(req, res);
}; 

http.createServer(app).listen(port);
console.log('server listening on port', port);

// pusher.updateMeal();
