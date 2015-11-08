var elPrice = 0;

var foodItemsArray = document.getElementsByClassName("item-container");
for (i = 0; i < foodItemsArray.length; i++) {
  foodItemsArray[i].addEventListener("click", makeClickHandler(i));
}

function makeClickHandler(i) {
  return function() {
    pusherClick(foodItemsArray[i], pusherRequest);
      var element = event.target;
      elPrice += parseInt(element.dataset.price);
      document.getElementById('totalPrice').innerHTML =elPrice;
  }
}

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

function pusherClick (div, callback){
  // Pusher.log = function(message) {
  //   if (window.console && window.console.log) {
  //     window.console.log(message);
  //   }
  // };
  var pusher = new Pusher('ed940c3e2cdcdcd47f50', {
    encrypted: true
  });
  callback();
  var channel = pusher.subscribe('my_channel');
  channel.bind('my_event', function(data) {
    console.log("pusher event!");
    greyOutSelectedItem(div);
  });
}

function greyOutSelectedItem(div){
      div.style.opacity = "0.2";
}
//
// }
