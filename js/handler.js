var handlers = module.exports = {};
var app = require('./app.js');
var fs = require('fs');

var pusher = require('./pusher.js');

var index = fs.readFileSync(__dirname+'/../public/login.html');
var payFile = fs.readFileSync(__dirname + '/../public/pay.html');
var cardPage = fs.readFileSync(__dirname + '/../public/index.html');
var restaurants = fs.readFileSync(__dirname + '/../public/search.html')
var headers = {"content-type": "text/html"};

handlers.home = function(req,res){
  res.writeHead(200, headers);
  res.end(index);
}

handlers.frontendStuff = function(req,res){
  var dots = req.url.split('.');
  var ext = dots[dots.length-1];
  var file=fs.readFileSync(__dirname + '/../public/' + req.url);
  res.writeHead(200, {"content-type" : "text/"+ext});
  res.end(file);
}

handlers.file = function(req,res){
  var ext = (req.url).split('.')[1];
  var file=fs.readFileSync(__dirname + '/../' +  req.url);
  res.writeHead(200, {"content-type" : "text/" +ext});
  res.end(file);
}

handlers.newCustomer = function(req,res) {
  app.newCustomer(req,res, function(err, customer){
    if (err != null) {
      res.writeHead(200, headers);
      res.end("Please try again.");
    } else {
      res.writeHead(200, headers);
      res.end();
    }
  })
}

handlers.payFile = function (req,res){
  pusher.updateMeal();
  res.writeHead(200, headers);
  res.end(payFile);
}

handlers.restaurants = function (req,res){
  res.writeHead(200, headers);
  res.end(restaurants);
}

handlers.charge = function (req,res) {
  app.charge(req, res, function(){
    res.writeHead(200, headers);
    res.end();
  })
}

handlers.registered = function (req,res){
  res.writeHead(200, headers);
  res.end(cardPage);
}

handlers.notFound = function(req,res){
  res.writeHead(404, headers);
  res.end("Can't help you there, chum!");
};
