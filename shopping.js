// Cart variables
let quantity = 0;
let cart = 0;
let details = "";
// Color tracking variables
// let colors = [red, violet, black, white, orange, yellow, navyblue, turquoise, beige, skyblue, limegreen, pink, cream, emeraldgreen, darkgrey, brown, aquamarine, lightgrey];
let colors = {
    "Red": 0,
    "Violet": 0,
    "Black": 0,
    "White": 0,
    "Orange": 0,
    "Yellow": 0,
    "Navy Blue": 0,
    "Turquoise": 0,
    "Beige": 0,
    "Sky Blue": 0,
    "Lime Green": 0,
    "Pink": 0,
    "Cream": 0,
    "Emerald Green": 0,
    "Dark Grey": 0,
    "Brown": 0,
    "Aqua Marine": 0,
    "Light Grey": 0,
}

let colorbuttons = {
    "Red": '<button class="inline-block color-button button-red" onclick="colorSelect(\'Red\');"></button>',
    "Violet": '<button class="inline-block color-button button-violet" onclick="colorSelect(\'Violet\');"></button>',
    "Black": '<button class="inline-block color-button button-black" onclick="colorSelect(\'Black\');"></button>',
    "White": '<button class="inline-block color-button button-white" onclick="colorSelect(\'White\');"></button>',
    "Orange": ' <button class="inline-block color-button button-orange" onclick="colorSelect(\'Orange\');"></button>',
    "Yellow": '<button class="inline-block color-button button-yellow" onclick="colorSelect(\'Yellow\');"></button>',
    "Navy Blue": '<button class="inline-block color-button button-navy-blue" onclick="colorSelect(\'Navy Blue\');"></button>',
    "Turquoise": '<button class="inline-block color-button button-turquoise" onclick="colorSelect(\'Turquoise\');"></button>',
    "Beige": '<button class="inline-block color-button button-beige" onclick="colorSelect(\'Beige\');"></button>',
    "Sky Blue": '<button class="inline-block color-button button-sky-blue" onclick="colorSelect(\'Sky Blue\');"></button>',
    "Lime Green": '<button class="inline-block color-button button-lime-green" onclick="colorSelect(\'Lime Green\');"></button>',
    "Pink": '<button class="inline-block color-button button-pink" onclick="colorSelect(\'Pink\');"></button>',
    "Cream": '<button class="inline-block color-button button-cream" onclick="colorSelect(\'Cream\');"></button>',
    "Emerald Green": '<button class="inline-block color-button button-emerald-green" onclick="colorSelect(\'Emerald Green\');"></button>',
    "Dark Grey": '<button class="inline-block color-button button-dark-grey" onclick="colorSelect(\'Dark Grey\');"></button>',
    "Brown": '<button class="inline-block color-button button-brown" onclick="colorSelect(\'Brown\');"></button>',
    "Aqua Marine": '<button class="inline-block color-button button-aqua-marine" onclick="colorSelect(\'Aqua Marine\');"></button>',
    "Light Grey": '<button class="inline-block color-button button-light-grey" onclick="colorSelect(\'Light Grey\');"></button>',
}

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
    let color = document.getElementById("color-choice2").innerText;
    colors[color] = quantity;

    // Get the total number of items in the cart
    cart = sumItems(colors);
    // Update the cart text to the total number of items
    document.querySelector("#quantity").innerHTML = cart;
    quantity = 0;
    for(var col in colors){
        if(colors[col]!=0){
            // console.log(col, colors[col])
            for (let i = colors[col]; i>0; i--){
                details +=colorbuttons[col];
            }
        }
    }
    document.querySelector("#details").innerHTML = "<p><strong>DETAILS</strong></p>"+details;
    details = "";
}

function updateQuant(){
    let color = document.getElementById("color-choice1").innerText;
    if (color == 'Select a color'){
        document.querySelector("#quant").innerText = "0";
        quantity = 0;
    } else {
        document.querySelector("#quant").innerText = colors[color];
        quantity = colors[color];
    }
    
}

function resetQuantity(){
    quantity = 0;
}

function sumItems(obj) {
    let sum = 0;
    for( var col in obj){
        sum+= obj[col];
    }
    return sum;
}