var request = new XMLHttpRequest();
console.log("LOGIN");
//DEAL WITH NO INPUT
document.getElementById('register').addEventListener('click', function(){
  console.log("CLICKED");
  request.onreadystatechange = function (){
    if (request.readyState===4 && request.status ===200){
      window.location.replace('http://juspayapp.herokuapp.com/registered');
    }
  }
  request.open('POST', '/registered');
  request.send();
})
