
// ==========================================
// 1. Function Without Parameters
// ATM Balance Checker
// ==========================================

let balanceBtn =
    document.getElementById("balanceBtn");

let balanceResult =
    document.getElementById("balanceResult");


balanceBtn.addEventListener(

    "click",

    checkBalance

);


function checkBalance() {

    balanceResult.innerText =

        "Your Account Balance is ₹50,000";

}



// ==========================================
// 2. Function With One Parameter
// Mobile Recharge
// ==========================================

let rechargeAmount =
    document.getElementById("rechargeAmount");

let rechargeBtn =
    document.getElementById("rechargeBtn");

let rechargeResult =
    document.getElementById("rechargeResult");


rechargeBtn.addEventListener(

    "click",

    function () {

        recharge(

            rechargeAmount.value

        );

    }

);


function recharge(amount) {

    rechargeResult.innerText =

        "Recharge Successful : ₹"

        +

        amount;

}


// ==========================================
// 3. Function With Multiple Parameters
// Shopping Bill
// ==========================================


let price1 =
    document.getElementById("price1");

let price2 =
    document.getElementById("price2");

let billBtn =
    document.getElementById("billBtn");

let billResult =
    document.getElementById("billResult");


billBtn.addEventListener(

    "click",

    function () {

        calculateBill(

            Number(price1.value),

            Number(price2.value)

        );

    }

);

function calculateBill(product1, product2) {

    let total =

        product1 +

        product2;

    billResult.innerText =

        "Total Bill : ₹"

        +

        total;

}

// ==========================================
// 4. Default Parameters
// Restaurant Food Order
// ==========================================

let foodItem =
    document.getElementById("foodItem");

let foodBtn =
    document.getElementById("foodBtn");

let foodResult =
    document.getElementById("foodResult");

foodBtn.addEventListener(

    "click",

    function () {

        let item = foodItem.value;

        if (item == "") {

            orderFood();

        }

        else {

            orderFood(item);

        }

    }

);

function orderFood(

    item = "Pizza"

) {

    foodResult.innerText =

        "Order Placed : "

        +

        item;

}
// ==========================================
// 5. Form Validation
// ==========================================

let userName =
    document.getElementById("userName");

let validateBtn =
    document.getElementById("validateBtn");

let validateResult =
    document.getElementById("validateResult");


validateBtn.addEventListener(

    "click",

    function () {

        validateForm(

            userName.value

        );

    }

);


function validateForm(name) {

    if (name == "") {

        validateResult.innerText =

            "❌ Please Enter Your Name";

    }

    else {

        validateResult.innerText =

            "✅ Welcome " + name;

    }

}

// ==========================================
// 6. E-Commerce Discount
// ==========================================

let productPrice =
    document.getElementById("productPrice");

let discountBtn =
    document.getElementById("discountBtn");

let discountResult =
    document.getElementById("discountResult");


discountBtn.addEventListener(

    "click",

    function () {

        calculateDiscount(

            Number(productPrice.value)

        );

    }

);

function calculateDiscount(price) {

    let discount =

        price * 15 / 100;

    let finalPrice =

        price - discount;

    discountResult.innerText =

        "Final Price : ₹"

        +

        finalPrice;

}

// ==========================================
// 7. Text Truncator
// ==========================================

let longText =
    document.getElementById("longText");

let truncateBtn =
    document.getElementById("truncateBtn");

let truncateResult =
    document.getElementById("truncateResult");


truncateBtn.addEventListener(

    "click",

    function () {

        truncateText(

            longText.value

        );

    }

);



function truncateText(text) {

    if (text.length > 7) {

        truncateResult.innerText =

            text.slice(0, 7)

            +

            "...";

    }

    else {

        truncateResult.innerText =

            text;

    }

}

// ==========================================
// 8. Dice Roller
// ==========================================

let diceBtn =
    document.getElementById("diceBtn");

let diceResult =
    document.getElementById("diceResult");

diceBtn.addEventListener(

    "click",

    rollDice

);

function rollDice() {

    let randomNumber =

        Math.floor(

            Math.random() * 6

        ) + 1;

    diceResult.innerText =

        "🎲 Dice Number : "

        +

        randomNumber;

}
// ==========================================
// 9. Currency Formatter
// ==========================================


let salary =
    document.getElementById("salary");

let salaryBtn =
    document.getElementById("salaryBtn");

let salaryResult =
    document.getElementById("salaryResult");


salaryBtn.addEventListener(

    "click",

    function () {

        formatCurrency(

            Number(salary.value)

        );

    }

);


function formatCurrency(amount) {

    salaryResult.innerText =

        "Formatted Salary : ₹"

        +

        amount.toLocaleString("en-IN");

}

// ==========================================
// 10. Dynamic UI Updater
// ==========================================


let themeBtn =
    document.getElementById("themeBtn");

let themeCard =
    document.getElementById("themeCard");


themeBtn.addEventListener(

    "click",

    changeTheme

);


function changeTheme() {

    let colors = [

        "#cd2b1c",

        "#718abf",

        "#cf6ca7",

        "#73652c",

        "#c67dea",

        "#0b96d7"

    ];

    let random =

        Math.floor(

            Math.random()

            *

            colors.length

        );

    themeCard.style.backgroundColor =

        colors[random];

}

// ==========================================
// 11. Time Based Greeting
// ==========================================


let greetBtn =
    document.getElementById("greetBtn");

let greetResult =
    document.getElementById("greetResult");

greetBtn.addEventListener(

    "click",

    showGreeting

);


function showGreeting() {

    let hour =

        new Date().getHours();

    if (hour < 12) {

        greetResult.innerText =

            "🌞 Good Morning";

    }

    else if (hour < 17) {

        greetResult.innerText =

            "☀️ Good Afternoon";

    }

    else if (hour < 21) {

        greetResult.innerText =

            "🌇 Good Evening";

    }

    else {

        greetResult.innerText =

            "🌙 Good Night";

    }

}