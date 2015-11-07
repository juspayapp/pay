var request = new XMLHttpRequest();

var form = document.getElementById('payment-form');

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('clicked');
  Stripe.card.createToken(form, function stripeResponseHandler(status, response){
    var token = response.id;
    sendRequest(token);
  });
});

function sendRequest(token) {
  console.log(token);
  request.onreadystatechange = function (){
    if (request.readyState===4 && request.status ===200){
      document.body.innerHTML = request.responseText;
    //DEAL WITH ERROR
    }
  }
  request.open('POST', '/newCustomer');
  request.send(token);
}
