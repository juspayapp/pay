var handlers = require('./handler.js');

var routes = {
  '/': handlers.home,
  '/newCustomer': handlers.newCustomer,
  '/public/style.css': handlers.file,
  '/public/main.js': handlers.file,
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
