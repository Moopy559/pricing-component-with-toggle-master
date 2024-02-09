const toggle = document.getElementById("toggle");
const basicPricing = document.getElementById("basic-pricing");
const proPricing = document.getElementById("pro-pricing");
const masPricing = document.getElementById("master-pricing");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("monthly");
  checkPricing();
});

function checkPricing() {
  toggle.classList.contains("monthly")
    ? updateMonthlyPricing()
    : updateAnnualPricing();
}

function updateAnnualPricing() {
  basicPricing.textContent = "$199.99";
  proPricing.textContent = "$249.99";
  masPricing.textContent = "$399.99";
}

function updateMonthlyPricing() {
  basicPricing.textContent = "$19.99";
  proPricing.textContent = "$24.99";
  masPricing.textContent = "$39.99";
}
