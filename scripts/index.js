let basePrice = 1299;
let promoCode = "stevekaku";
//html elements
let extraMemoryPrice = document.getElementById("extra-memory-price");
let extraStoragePrice = document.getElementById("extra-storage-price");
let deliveryCharge = document.getElementById("delivery-charge");
let totalPrice = document.getElementById("total-price");
let total = document.getElementById("total");
let promoCodeInputBox = document.getElementById("promo-code");

//event listeners
document.getElementById("buttons").addEventListener("click", (event) => {
    applyExtraCost(event.target.id.toString());
});
document.getElementById("apply-promo-code").addEventListener("click", () => {
    //extract promo code input field value and pass it
    applyPromoCode(extractPromoCode());
});

function applyExtraCost(id) {
    switch (id) {
        case "8gb-memory":
            extraMemoryPrice.innerText = 0;
            break;
        case "16gb-memory":
            extraMemoryPrice.innerText = 180;
            break;
        case "256gb-storage":
            extraStoragePrice.innerText = 0;
            break;
        case "512gb-storage":
            extraStoragePrice.innerText = 100;
            break;
        case "1tb-storage":
            extraStoragePrice.innerText = 180;
            break;
        case "aug25":
            deliveryCharge.innerText = 0;
            break;
        case "aug21":
            deliveryCharge.innerText = 20;
            break;
        default:
    }
    updatePrices();
}

function updatePrices() {
    totalPrice.innerText = total.innerText = basePrice + parseInt(extraMemoryPrice.innerText) + parseInt(extraStoragePrice.innerText) + parseInt(deliveryCharge.innerText);
}

function extractPromoCode() {
    let code = promoCodeInputBox.value.toString();
    promoCodeInputBox.value = "";
    return code;
}

function applyPromoCode(code) {
    if (code === promoCode) {
        total.innerText = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.20;
    }
}
