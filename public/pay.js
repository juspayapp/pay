
var socket = io();
var elPrice = 0;

// Pusher.log = function(message) {
//   if (window.console && window.console.log) {
//     window.console.log(message);
//   }
// };
// var pusher = new Pusher('ed940c3e2cdcdcd47f50', {
//   encrypted: true
// });

var foodItemsArray = document.getElementsByClassName("item-container");
for (i = 0; i < foodItemsArray.length; i++) {
  foodItemsArray[i].addEventListener("click", makeClickHandler(i));
}

function makeClickHandler(i) {
  return function() {
    // pusherClick(foodItemsArray[i], pusherRequest);
      var element = event.target;
      console.log(typeof foodItemsArray[i]);
      elPrice += parseInt(element.dataset.price);
      document.getElementById('totalPrice').innerHTML =elPrice;
      var str = "hello world";
      var div = foodItemsArray[i];
      console.log(div);
      console.log("^^^^^", event.target)
      socket.emit('user paid', i);
  }
}

socket.on('send message', function(i){
foodItemsArray[i].style.opacity = "0.2";
  
})

// function pusherRequest(){
//     request.open('GET', '/pusherUpdate');
//     request.send();
// }

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

// function pusherClick (div, callback){
  // Pusher.log = function(message) {
  //   if (window.console && window.console.log) {
  //     window.console.log(message);
  //   }
  // };
  // var pusher = new Pusher('ed940c3e2cdcdcd47f50', {
  //   encrypted: true
  // });
  // callback();
//   var channel = pusher.subscribe('my_channel');
//   channel.bind('my_event', function(data) {
//     console.log("pusher event!");
//     console.log(data);
//     greyOutSelectedItem(div);
//   });
// }

// function greyOutSelectedItem(div){
//       div.style.opacity = "0.2";
// }
//
// }
