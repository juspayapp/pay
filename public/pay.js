
var socket = io();
var elPrice = 0;
var clicked=[];

Pusher.log = function(message) {
  if (window.console && window.console.log) {
    window.console.log(message);
  }
};

var pusher = new Pusher('ed940c3e2cdcdcd47f50', {
  encrypted: true
});
var channel = pusher.subscribe('my_channel');
channel.bind('my_event', function(data) {
  // alert(data.message);
  var message = data.message;
  if(clicked[i]="true"){
  toastr.success(message);
}

});


var foodItemsArray = document.getElementsByClassName("item-container");
for (i = 0; i < foodItemsArray.length; i++) {
  foodItemsArray[i].addEventListener("click", makeClickHandler(i));
}

function makeClickHandler(i) {
  clicked[i] = "true";
  return function() {
    pusherRequest();
      var element = event.target;
      console.log(typeof foodItemsArray[i]);
      elPrice += parseInt(element.dataset.price);
      document.getElementById('totalPrice').innerHTML =elPrice;
      var str = "hello world";
      var div = foodItemsArray[i];
      socket.emit('user paid', i);
  }
}

socket.on('send message', function(i){
foodItemsArray[i].style.opacity = "0.2";

})

function pusherRequest(){
    request.open('GET', '/pusherUpdate');
    request.send();
}

var request = new XMLHttpRequest();
console.log("PAY JS");

document.getElementById('payButton').addEventListener('click', function(){
  console.log("CLICKED");
  var ok = confirm('Are you sure you want to pay?');
  if (ok === true) {
    request.onreadystatechange = function (){
      // if (request.readyState===4 && request.status ===200){
        window.location.replace('http://juspayapp.herokuapp.com/restaurants')
      //DEAL WITH ERROR
      // }
    }
    request.open('POST', '/charge');
    request.send();
  }
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
