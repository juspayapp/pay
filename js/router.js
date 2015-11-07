var handlers = require('./handler.js');

var routes = {
  '/': handlers.home,
  '/newCustomer': handlers.newCustomer,
  '/public': handlers.file,
  '/favicon.ico' : handlers.file,
  '/registered': handlers.registered,
  '/payFile' : handlers.payFile,
  '/restaurants' : handlers.restaurants,
  '/pusherUpdate' : handlers.pusherUpdate,
  '/charge': handlers.charge,
  '/frontendStuff': handlers.frontendStuff,
  '404': handlers.notFound
};

module.exports = function(req, res) {
  console.log(req.url);
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else if (req.url.match('/public')) {
    routes['/public'](req, res);
  } else if (req.url.match('/js') || req.url.match('/css') || req.url.match('/img')) {
    routes['/frontendStuff'](req, res);
  } else {
    routes['404'](req, res);
  }
};
