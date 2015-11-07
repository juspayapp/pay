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
  request.open('POST', '/newCustomer');
  request.send(token);
})
