var request = new XMLHttpRequest();

var form = document.getElementById('payment-form');

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('clicked');
  Stripe.card.createToken(form, function stripeResponseHandler(status, response){
    console.log('STRIPEEEE');
    console.log('status>>>>>>', status);
    console.log('response>>>>', response);
    var token = response.id;
    sendRequest(token);
  });
});

function sendRequest(token, callback) {
  console.log(token);
  request.onreadystatechange = function (){
    if (request.readyState===4 && request.status ===200){
        console.log('response!!!');
       window.location.replace('http://juspayapp.herokuapp.com/restaurants')
    //DEAL WITH ERROR
    }
  }
  request.open('POST', '/newCustomer');
  request.send(token);
}

// function getPayFile (){
//   console.log("yo");
//   request.open('GET', '/payFile');
//   request.send();
//   request.onreadystatechange = function (){
//     if (request.readyState===4 && request.status ===200){
//         document.body.innerHTML = request.responseText;
//     //DEAL WITH ERROR
//     }
//   }
// }
