// Cart variables
let quantity = 0;
let cart = 0;
let details = "";

// Color tracking variables
let colors = ["Red", "Violet", "Black", "White", "Orange", "Yellow", "Navy Blue", "Turquoise", "Beige", "Sky Blue", "Lime Green", "Pink", "Cream", "Emerald Green", "Dark Grey", "Brown", "Aqua Marine", "Light Grey"];
let colorclasses;

class Color {
    constructor(color, cost) {
        this.name = color;
        this.quantity = 0;
        this.price = cost;
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
    get priceGet() {
        return this.price;
    }
}

function createColors() {
    colorclasses = {
        "Red": new Color("Red", 14.99),
        "Violet": new Color("Violet", 15.99),
        "Black": new Color("Black", 20.99),
        "White": new Color("White", 19.99),
        "Orange": new Color("Orange", 16.99),
        "Yellow": new Color("Yellow", 17.99),
        "Navy Blue": new Color("Navy Blue", 18.99),
        "Turquoise": new Color("Turquoise", 13.99),
        "Beige": new Color("Beige", 12.99),
        "Sky Blue": new Color("Sky Blue", 21.99),
        "Lime Green": new Color("Lime Green", 11.99),
        "Pink": new Color("Pink", 16.49),
        "Cream": new Color("Cream", 13.49),
        "Emerald Green": new Color("Emerald Green", 17.49),
        "Dark Grey": new Color("Dark Grey", 18.49),
        "Brown": new Color("Brown", 12.49),
        "Aqua Marine": new Color("Aqua Marine", 19.49),
        "Light Grey": new Color("Light Grey", 16.49),
    }
}

// Change the color to the user selected option
function colorSelect(color) {
    document.getElementById("color-choice1").innerHTML = color;
    document.getElementById("color-choice2").innerHTML = color;
    document.querySelector(".cart-button").innerHTML = "<strong>Add to Cart</strong>";
    document.querySelector("#price").innerText = "$"+colorclasses[color].priceGet;
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