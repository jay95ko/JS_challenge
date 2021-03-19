// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const numberBtn = document.querySelectorAll(".numberBtn");
const calBtn = document.querySelectorAll(".calBtn");
const zero = document.getElementById("zero");
const equal = document.getElementById("equal");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector(".input");

let claculatorString = "";
let claculatorNumberString = "";
let cal = "";

function numberString(button) {
  if (
    claculatorString.charAt(claculatorString.length - 1) == "/" ||
    claculatorString.charAt(claculatorString.length - 1) == "+" ||
    claculatorString.charAt(claculatorString.length - 1) == "-" ||
    claculatorString.charAt(claculatorString.length - 1) == "*"
  ) {
    claculatorNumberString = "";
  }
  claculatorString = claculatorString + button.innerText;
  claculatorNumberString = claculatorNumberString + button.innerText;
  input.value = claculatorNumberString;
}

function CalculatorString(button) {
  claculatorString = claculatorString + button.innerText;
  if (cal !== "") {
    cal = cal + button.innerText;
    claculating(button.innerText);
    return;
  }
  cal = cal + button.innerText;
}

function claculating() {
  var calculatededString = claculatorString.slice(0, -1);
  var splitedString = calculatededString.split(`${cal.charAt(0)}`);
  if (cal.charAt(0) === "+") {
    claculatorString = parseInt(splitedString[0]) + parseInt(splitedString[1]);
  }
  if (cal.charAt(0) === "-") {
    claculatorString = parseInt(splitedString[0]) - parseInt(splitedString[1]);
  }
  if (cal.charAt(0) === "*") {
    claculatorString = parseInt(splitedString[0]) * parseInt(splitedString[1]);
  }
  if (cal.charAt(0) === "/") {
    claculatorString = parseInt(splitedString[0]) / parseInt(splitedString[1]);
  }
  claculatorString = claculatorString + cal.charAt(cal.length - 1);
  console.log(claculatorString);
  cal = cal.charAt(cal.length - 1);
  const printClaculatorString = claculatorString.slice(0, -1);
  input.value = printClaculatorString;
  if (cal === "=") {
    claculatorString = "";
    cal = "";
    claculatorNumberString = "";
  }
}

function resetAll() {
  claculatorString = "";
  cal = "";
  claculatorNumberString = "";
  input.value = "0";
}

function init() {
  numberBtn.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", (event) => numberString(button));
  });
  calBtn.forEach(function (button) {
    button.addEventListener("click", (event) => CalculatorString(button));
  });
  resetBtn.addEventListener("click", resetAll);
}

init();
