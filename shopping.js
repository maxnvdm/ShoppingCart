
let quantity = 0;
let cart = 0;
function colorSelect(color){
    document.getElementById("color-choice1").innerHTML = color;
    document.getElementById("color-choice2").innerHTML = color;
}

function increment(){
    quantity++;
    document.querySelector("#quant").innerHTML = quantity;
}

function decrement(){
    quantity--;
    document.querySelector("#quant").innerHTML = quantity;
}

function updateCart(){
    cart = quantity;
    document.querySelector("#quantity").innerHTML = cart;
}