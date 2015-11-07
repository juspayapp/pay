var Pusher = require('pusher');

function updateMeal() {
  var pusher = new Pusher({
    appId: '152833',
    key: 'ed940c3e2cdcdcd47f50',
    secret: '80c0282705d6ef630305',
    encrypted: true
  });
  pusher.port = 443;

  pusher.trigger('test_channel', 'my_event', {
    "message": "hello world"
  });
}

module.exports =  {
    updateMeal: updateMeal
};
