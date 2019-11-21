
let quantity = 0;
function colorSelect(color){
    document.getElementById("color-choice1").innerHTML = color;
    document.getElementById("color-choice2").innerHTML = color;
}

function increment(){
    quantity++;
    document.getElementById("quantity-value").outerHTML = quantity;
}