// Cart variables
let quantity = 0;
let cart = 0;
let details = "";

// Color tracking variables
let colors = ["Red", "Violet", "Black", "White", "Orange", "Yellow", "Navy Blue", "Turquoise", "Beige", "Sky Blue", "Lime Green", "Pink", "Cream", "Emerald Green", "Dark Grey", "Brown", "Aqua Marine", "Light Grey"];
let colorclasses;

class Color {
    constructor(color) {
        this.name = color;
        this.quantity = 0;
    }
    get button() {
        let btnName = this.name.toLowerCase().replace(" ","-");
        return "<button class='inline-block color-button button-" + btnName + "' onclick=colorSelect('" + this.name + "');></button>";
    }
    set quantitySet(amount) {
        this.quantity = amount;
    }
    get quantityGet() {
        return this.quantity;
    }
}

function createColors() {
    colorclasses = {
        "Red": new Color("Red"),
        "Violet": new Color("Violet"),
        "Black": new Color("Black"),
        "White": new Color("White"),
        "Orange": new Color("Orange"),
        "Yellow": new Color("Yellow"),
        "Navy Blue": new Color("Navy Blue"),
        "Turquoise": new Color("Turquoise"),
        "Beige": new Color("Beige"),
        "Sky Blue": new Color("Sky Blue"),
        "Lime Green": new Color("Lime Green"),
        "Pink": new Color("Pink"),
        "Cream": new Color("Cream"),
        "Emerald Green": new Color("Emerald Green"),
        "Dark Grey": new Color("Dark Grey"),
        "Brown": new Color("Brown"),
        "Aqua Marine": new Color("Aqua Marine"),
        "Light Grey": new Color("Light Grey"),
    }
}

// Change the color to the user selected option
function colorSelect(color) {
    document.getElementById("color-choice1").innerHTML = color;
    document.getElementById("color-choice2").innerHTML = color;
    document.querySelector(".cart-button").innerHTML = "<strong>Add to Cart</strong>";
}

// Increment the quantity of the item and update the html
function increment() {
    quantity++;
    document.querySelector("#quant").innerHTML = quantity;
}

// Decrement the quantity of the item and update the html
function decrement() {
    if(quantity>0){
        quantity--;
        document.querySelector("#quant").innerHTML = quantity;
    } else {
        document.querySelector("#quant").innerHTML = quantity;
    }   
}

// Updates the cart after the user clicks agree (on modal)
function updateCart() {
    // Fetch the current color choice
    let color = document.getElementById("color-choice2").innerText;
    // Set that color's quantity to the selected amount
    colorclasses[color].quantitySet = quantity;

    // Get the total number of colors in the cart
    cart = sumItems(colorclasses);

    // Update the cart text to the total number of items
    document.querySelector("#quantity").innerHTML = cart;

    // Set the color icons below DETAILS
    for(const item of colors) {
        if(colorclasses[item].quantityGet != 0) {
            for (let i = colorclasses[item].quantityGet; i > 0; i--){
                details +=colorclasses[item].button;
            }
        }
    }
    document.querySelector("#details").innerHTML = "<p><strong>DETAILS</strong></p>"+details;
    details = "";

    // Change Add to Cart button text to Checkout
    document.querySelector(".cart-button").innerHTML = "<strong>Checkout now</strong>";
}

function updateQuant(){
    let color = document.getElementById("color-choice1").innerText;
    if (color == 'Select a color'){
        document.querySelector("#quant").innerText = "0";
        quantity = 0;
    } else {
        document.querySelector("#quant").innerText = colorclasses[color].quantityGet;
        quantity = colorclasses[color].quantityGet;
    }
}

function resetQuantity(){
    quantity = 0;
}

function sumItems(obj) {
    let sum = 0;
    for( var col in obj){
        sum+= obj[col].quantityGet;
    }
    return sum;
}