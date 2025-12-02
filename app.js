console.log("js is working");
const priceRange = document.querySelector("#price-bar");
const applyDiscount = document.querySelector("#discount");
const removeDiscount = document.querySelector("#remove-discount");
const pages = document.querySelector(".views");
const price = document.querySelector(".price");

priceRange.addEventListener("input", () => {
    removeDiscount.checked = "true";
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

applyDiscount.addEventListener("click", () => {
    let num = price.textContent - (price.textContent * 25) / 100;
    price.textContent = num.toFixed(2);
});
