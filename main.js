console.log(result);
let convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convert);

const currencyRatioUsd = {
  usd: 1,
  krw: 1193.27,
  eur: 0.9,
  vnd: 23235.5,
};

function getConversionRate(from, to) {
  return currencyRatioUsd[to] / currencyRatioUsd[from];
}

console.log(getConversionRate("vnd", "vnd"));

function convert() {
  let fromCurrency = document.getElementById("fromCurrencyList").value;
  let toCurrency = document.querySelector('input[name="toCurrency"]:checked')
    .value;
  let rate = getConversionRate(fromCurrency, toCurrency);
  console.log(rate);
  let amountInput = document.getElementById("amount").value;
  console.log(amountInput);
  let convertAmount = rate * amountInput;
  
  document.getElementById("result").innerHTML =
    amountInput + " is " + convertAmount;
}

