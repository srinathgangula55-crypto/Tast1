const MENU = {
    Size: {
        thin: 8.00,
        regular: 10.00,
        stuffed: 12.00
    },

    Lenght: {
        small: 1.0,
        medium: 1.5,
        large: 2.0
    },

    toppings: {
        cheese: 1.0,
        pepperoni: 1.0,
        mushrooms: 1.0,
        onions: 1.0,
        peppers: 1.0,
        sausage: 1.0
    }
};

// Pure Functions

const calculatePrice = (Size, Lenght) => {
    const Sizeprize =
        MENU.Size[Size] || MENU.Size.regular;

    const Lenghtprize =
        MENU.Lenght[Lenght] || MENU.Lenght.medium;

    return Sizeprize * Lenghtprize;
};

const calculateToppingsPrice = (toppings) => {
    return toppings.reduce((total, topping) => {
        return total + MENU.toppings[topping];
    }, 0);
};

// Higher Order Function

const calculateTotalPrice = (
    calculatePrice,
    calculateToppingsPrice
) => {

    return (Size, Lenght, toppings) => {

        const basePrice =
            calculatePrice(Size, Lenght);

        const toppingsPrice =
            calculateToppingsPrice(toppings);

        return basePrice + toppingsPrice;
    };
};

const getTotalPrice = calculateTotalPrice(
    calculatePrice,
    calculateToppingsPrice
);

let selectedSize = "small";

const sizeButtons =
    document.querySelectorAll(".size-btn");

sizeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        sizeButtons.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        selectedSize = btn.dataset.size;

        updateReceipt();
    });
});

document
    .getElementById("crust")
    .addEventListener("change", updateReceipt);

document
    .querySelectorAll(
        'input[type="checkbox"]'
    )
    .forEach(box => {
        box.addEventListener(
            "change",
            updateReceipt
        );
    });

function updateReceipt() {

    const crust =
        document.getElementById("crust").value;

    const toppings = [
        ...document.querySelectorAll(
            'input[type="checkbox"]:checked'
        )
    ].map(item => item.value);

    const basePrice =
        calculatePrice(crust, selectedSize);

    const toppingsPrice =
        calculateToppingsPrice(toppings);

    const totalPrice =
        getTotalPrice(
            crust,
            selectedSize,
            toppings
        );

    document.getElementById(
        "basePrice"
    ).textContent =
        `$${basePrice.toFixed(2)}`;

    document.getElementById(
        "toppingsPrice"
    ).textContent =
        `$${toppingsPrice.toFixed(2)}`;

    document.getElementById(
        "totalPrice"
    ).textContent =
        `$${totalPrice.toFixed(2)}`;

    document.getElementById(
        "pizzaTitle"
    ).textContent =
        `${selectedSize.toUpperCase()} ${crust.toUpperCase()} CRUST PIZZA`;
}

updateReceipt();