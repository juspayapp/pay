Pusher.log = function(message) {
  if (window.console && window.console.log) {
    window.console.log(message);
  }
};

var pusher = new Pusher('ed940c3e2cdcdcd47f50', {
  encrypted: true
});
var channel = pusher.subscribe('test_channel');
channel.bind('my_event', function(data) {
  alert(data.message);
});
