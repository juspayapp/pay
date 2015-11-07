var Pusher = require('pusher');
var env = require('env2')('../config.env');

function updateMeal() {
  console.log("uPDATE MEAL HERE!!!!!!!!!!!!!!!!!!");
  var pusher = new Pusher({
    appId: '152833',
    key: 'ed940c3e2cdcdcd47f50',
  // secret: '80c0282705d6ef630305',
  //   // appId: process.env.pusherAppId,
  //   // key: process.env.pusherKey,
    secret: process.env.pusherSecret,
    encrypted: true
  });
  pusher.port = 443;

  pusher.trigger('test_channel', 'my_event', {
    "message": "hello world"
  });
        console.log("uPDATE MEAL again???????????? TRIGGER");
}

module.exports =  {
    updateMeal: updateMeal
};
