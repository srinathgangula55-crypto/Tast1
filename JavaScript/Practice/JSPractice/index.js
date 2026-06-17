// Change Main Image

function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}

// Quantity Increase

function increaseQty() {

    let qtyInput = document.getElementById("qty");

    let qty = parseInt(qtyInput.value);

    qty++;

    qtyInput.value = qty;
}

// Quantity Decrease

function decreaseQty() {

    let qtyInput = document.getElementById("qty");

    let qty = parseInt(qtyInput.value);

    if (qty > 1) {
        qty--;
    }

    qtyInput.value = qty;
}