var Pusher = require('pusher');
var env = require('env2')('./config.env');

function updateMeal() {
  console.log('updatemeal here!!!!!!!!!!!!!');
  var pusher = new Pusher({
    appId: '152833',
    key: 'ed940c3e2cdcdcd47f50',
    secret: process.env.pusherSecret,
    encrypted: true
  });
  pusher.port = 443;

  pusher.trigger('my_channel', 'my_event', {
    "message": "Someone has selected an item"
  });
}

// function pusherConnect() {
//   console.log('updatemeal here!!!!!!!!!!!!!');
//   var pusher = new Pusher({
//     appId: '152833',
//     key: 'ed940c3e2cdcdcd47f50',
//     secret: process.env.pusherSecret,
//     encrypted: true
//   });
//   pusher.port = 443;
//
//   pusher.trigger('my_channel', 'my_event', {
//     "message": "Someone has paid!"
//   });
// console.log('NEW USER TRIGGER BABY');
// }


module.exports =  {
    // pusherConnect: pusherConnect,
    updateMeal: updateMeal
};
