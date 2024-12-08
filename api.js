import { countryList } from "./codes.js";

const convertedCurrency = document.getElementById("convertedCurrency");
const toCountryElement = document.getElementById("toCountry");
const currencyInputElement = document.getElementById("currencyInput");
const buttonElement = document.getElementById("buttonElement");

countryList.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.value;
  option.textContent = item.label;
  toCountryElement.appendChild(option);
});

const getEurConvertedCurrency = async () => {
  const url = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
  let currencyInput = currencyInputElement.value;
  var toCountrySelected = toCountryElement.value;
  console.log(toCountrySelected);
  if (currencyInput === "") {
    currencyInput = 1;
  }

  // else{
  //    return currencyInput*fromCountrySelected
  // }
  console.log(currencyInput);
  const result = await fetch(url).then(async (response) => {
    const resultData = await response.json();
    var finalValue = resultData["eur"][toCountrySelected] * currencyInput;
    convertedCurrency.innerText = Math.round(finalValue * 1000) / 1000;
  });
};

buttonElement.addEventListener("click", getEurConvertedCurrency);
