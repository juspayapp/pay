var request = new XMLHttpRequest();
console.log("RESTAURANTS");

document.getElementsByClassName('portfolio-box-caption').addEventListener('click', function(){
  console.log("CLICKED");
  // request.onreadystatechange = function (){
  //   if (request.readyState===4 && request.status ===200){
  //     console.log(request.responseText);
  //   //DEAL WITH ERROR
  //   }
  // }
  // request.open('POST', '/charge');
  // request.send();
})
