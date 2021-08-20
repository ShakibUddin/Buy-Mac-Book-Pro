let basePrice = 1299;
let promoCode = "stevekaku";

let extraMemoryPrice = document.getElementById("extra-memory-price");
let extraStoragePrice = document.getElementById("extra-storage-price");
let deliveryCharge = document.getElementById("delivery-charge");
let totalPrice = document.getElementById("total-price");
let total = document.getElementById("total");
let promoCodeInputBox = document.getElementById("promo-code");

//event listener
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
            updatePrices();
            break;
        case "16gb-memory":
            extraMemoryPrice.innerText = 180;
            updatePrices();
            break;
        case "256gb-storage":
            extraStoragePrice.innerText = 0;
            updatePrices();
            break;
        case "512gb-storage":
            extraStoragePrice.innerText = 100;
            updatePrices();
            break;
        case "1tb-storage":
            extraStoragePrice.innerText = 180;
            updatePrices();
            break;
        case "aug25":
            deliveryCharge.innerText = 0;
            updatePrices();
            break;
        case "aug21":
            deliveryCharge.innerText = 20;
            updatePrices();
            break;
        default:
    }
}

function updatePrices() {
    totalPrice.innerText = total.innerText = basePrice + parseInt(extraMemoryPrice.innerText) + parseInt(extraStoragePrice.innerText) + parseInt(deliveryCharge.innerText);
}

function applyPromoCode(code) {
    if (code === promoCode) {
        total.innerText = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.20;
    }
}

function extractPromoCode() {
    let code = promoCodeInputBox.value.toString();
    promoCodeInputBox.value = "";
    return code;
}