const priceRange = document.querySelector("#price-bar");
const applyDiscount = document.querySelector("#discount");
const removeDiscount = document.querySelector("#remove-discount");
const pages = document.querySelector(".views");
const price = document.querySelector(".price");

let discountApplied = false;

applyDiscount.addEventListener("click", () => {
    if (discountApplied) return;

    let base = parseFloat(price.textContent);
    let discounted = base - (base * 25) / 100;
    price.textContent = discounted.toFixed(2);

    discountApplied = true;
});

removeDiscount.addEventListener("click", () => {
    discountApplied = false;

    priceRange.dispatchEvent(new Event("input"));
});

priceRange.addEventListener("input", () => {
    removeDiscount.checked = true;

    if (priceRange.value < 20) {
        pages.textContent = "10K";
        price.textContent = "8.00";
    } else if (priceRange.value < 40) {
        pages.textContent = "50K";
        price.textContent = "12.00";
    } else if (priceRange.value < 60) {
        pages.textContent = "100K";
        price.textContent = "16.00";
    } else if (priceRange.value < 80) {
        pages.textContent = "500K";
        price.textContent = "24.00";
    } else {
        pages.textContent = "1M";
        price.textContent = "36.00";
    }
});
