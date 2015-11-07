var handlers = module.exports = {};
var app = require('./app.js');
var fs = require('fs');

var pusher = require('./pusher.js');

var index = fs.readFileSync(__dirname+'/../public/index.html');
var payFile = fs.readFileSync(__dirname + '/../public/pay.html');
var headers = {"content-type": "text/html"};

handlers.home = function(req,res){
  res.writeHead(200, headers);
  res.end(index);
}

handlers.file = function(req,res){
  var file=fs.readFileSync(__dirname + '/../'+req.url);
  var ext = (req.url).split('.')[1];
  res.writeHead(200, {"content-type" : "text/" +ext});
  res.end(file);
}

handlers.newCustomer = function(req,res) {
  app.newCustomer(req,res, function(err, customer){
    if (err != null) {
      res.writeHead(200, headers);
      res.end("Please try again");
    } else {
      res.writeHead(200, headers);
      res.end();
    }
  })
}

handlers.payFile = function (req,res){
  res.writeHead(200, headers);
  pusher.updateMeal();
  res.end(payFile);
}

handlers.notFound = function(req,res){
  res.writeHead(404, headers);
  res.end("Can't help you there, chum!");
};
