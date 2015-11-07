var handlers = require('./handler.js');

var routes = {
  '/': handlers.home,
  '/newCustomer': handlers.newCustomer,
  '/public/css/animate.min.css': handlers.file,
  '/public/css/juspay.css' : handlers.file,
  '/public/main.js': handlers.file,
  // '/public/pay.html' : handlers.file,
  '/public/pay.js' : handlers.file,
  '/payFile' : handlers.payFile,
  '/charge': handlers.charge,
  '404': handlers.notFound
};

module.exports = function(req, res) {
  console.log(req.url);
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes['404'](req, res);
  }
};
