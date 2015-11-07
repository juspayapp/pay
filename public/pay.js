var request = new XMLHttpRequest();
console.log("PAY JS");

document.getElementById('payButton').addEventListener('click', function(){
  console.log("CLICKED");
  request.onreadystatechange = function (){
    if (request.readyState===4 && request.status ===200){
      console.log(request.responseText);
    //DEAL WITH ERROR
    }
  }
  request.open('POST', '/charge');
  request.send();
})

// Pusher.log = function(message) {
//   if (window.console && window.console.log) {
//     window.console.log(message);
//   }
// };
//
// var pusher = new Pusher('ed940c3e2cdcdcd47f50', {
//   encrypted: true
// });
// var channel = pusher.subscribe('test_channel');
// channel.bind('my_event', function(data) {
//   alert(data.message);
// });
