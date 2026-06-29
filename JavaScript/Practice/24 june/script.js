//----------------- Pizza Prices--------------------

const MENU = {

    crust: {

        thin: 60,

        regular: 80,

        stuffed: 100
    },

    size: {

        small: 1,

        medium: 1.5,

        large: 2
    }

};

//---------------------------- Default Size-------------------

let selectedSize = "small";

// -------Select Buttons---------

let smallBtn =
document.getElementById("smallBtn");

let mediumBtn =
document.getElementById("mediumBtn");

let largeBtn =
document.getElementById("largeBtn");

// ---------Default Active Button-------

smallBtn.classList.add("active");

// -----------------------Small Button-----------------------------

smallBtn.addEventListener("click", function(){

    selectedSize = "small";

    removeActive();

    smallBtn.classList.add("active");

    updateReceipt();

});

// ----------------------Medium Button----------------------

mediumBtn.addEventListener("click", function(){

    selectedSize = "medium";

    removeActive();

    mediumBtn.classList.add("active");

    updateReceipt();

});

// ------------------------Large Button-----------------------

largeBtn.addEventListener("click", function(){

    selectedSize = "large";

    removeActive();

    largeBtn.classList.add("active");

    updateReceipt();

});

// ---------------------Remove Active Class---------------------

function removeActive(){

    smallBtn.classList.remove("active");

    mediumBtn.classList.remove("active");

    largeBtn.classList.remove("active");

}

// -----------------------Crust Change-----------------------------

document
.getElementById("crust")
.addEventListener("change", updateReceipt);

// -----------------------Checkbox Change---------------------------

let checkboxes =
document.querySelectorAll(
'input[type="checkbox"]'
);

checkboxes.forEach(function(box){

    box.addEventListener(
        "change",
        updateReceipt
    );

});

// ------------------------Main Function--------------------------

function updateReceipt(){

    let crust =

    document
    .getElementById("crust")
    .value;

    // --------Base Price------

    let basePrice =

    MENU.crust[crust] *

    MENU.size[selectedSize];

    // -----------------------------Toppings Price--------------------------

    let toppingPrice = 0;

    checkboxes.forEach(function(box){

        if(box.checked){

            toppingPrice =

            toppingPrice + 1;

        }

    });

    // ------------------------------Total---------------------

    let total =

    basePrice +

    toppingPrice;

    // -----------------------------Show Prices-----------------

    document
    .getElementById("basePrice")
    .innerText =
    "$" +
    basePrice.toFixed(2);

    document
    .getElementById("toppingPrice")
    .innerText =
    "$" +
    toppingPrice.toFixed(2);

    document
    .getElementById("totalPrice")
    .innerText =
    "$" +
    total.toFixed(2);

    // -----------------------------Pizza Name--------------------

    document
    .getElementById("pizzaTitle")
    .innerText =

    selectedSize.toUpperCase()

    + " "

    + crust.toUpperCase()

    + " CRUST PIZZA";

}

// -----------------------------Load Default Price-------------------

updateReceipt();