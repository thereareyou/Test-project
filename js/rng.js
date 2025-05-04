import { handleChangeMenu } from "./menu.js";

const generation = document.getElementById("generateBtn");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");
const result = document.getElementById("result");

function calculateResult(min, max) {
  const resultNumber = Math.floor(Math.random() * (max - min + 1) + min);
  result.innerHTML = resultNumber;
}

generation.addEventListener("click", () => {
  let min = parseInt(minValue.value);
  let max = parseInt(maxValue.value);

  if (isNaN(min) && isNaN(max)) {
    minValue.value = 1;
    maxValue.value = 100;
    min = 1;
    max = 100;

    calculateResult(min, max);
  } else if (min > max || isNaN(max) || min === max) {
    maxValue.value = min + 1;
    max = min + 1;

    calculateResult(min, max);
  } else if (isNaN(min)) {
    minValue.value = max - 1;
    min = max - 1;

    calculateResult(min, max);
  } else {
    calculateResult(min, max);
  }
});
