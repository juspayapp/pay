var lamb = document.getElementById('food-item-lamb');
var price = lamb.dataset.price;
console.log('priiiiiiice', price);
var foodItemsArray = document.getElementsByClassName("item-container");
for(var i=0;i<foodItemsArray.length;i++){
        foodItemsArray[i].addEventListener('click', function (element) {
            console.log('ELEMENT', element);
            // var yourNewTotal =
            document.getElementById('totalPrice').innerHTML = element.dataset.price;
            console.log(yourNewTotal)
            // document.getElementById('totalPrice').innerHTML=yourNewTotal
        }, false);
    }
