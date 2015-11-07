var app = module.exports = {};
var env = require('env2')('../config.env');
var stripe = require("stripe")(process.env.stripeSecretKey);

var customerId = 'cus_7JAdjr9PIqKTFd'

app.parseBody = function(object, callback) {
  var body = "";
  object.on('data', function(data) {
    body += data;
  });
  object.on('end', function() {
    callback(body);
  });
  object.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};

app.newCustomer = function(req,res,callback) {
  app.parseBody(req, function(body){
    var token = body;
    console.log(token);
    stripe.customers.create({
      source: token,
      description: 'description for payinguser@example.com',
      email: 'marziyeh.naaz.ahmed@gmail.com'
    }, function (err, customer) {
      console.log("ERR>>>>>>>>",err);
      console.log("Customer>>>>>>>", customer);
       callback(err, customer);
    })
  })
}
