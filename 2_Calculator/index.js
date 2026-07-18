const button = document.querySelectorAll(".button");
let expression = "";
const display = document.querySelector("#result");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", handleClick);
}

function handleClick() {
  let operation = this.getAttribute("value");

  switch (operation) {
    case "+":
      expression += "+";
      displayOutput();
      break;
    case "-":
      expression += "-";
      displayOutput();
      break;
    case "×":
      expression += "×";
      displayOutput();
      break;
    case "÷":
      expression += "÷";
      displayOutput();
      break;
    case "=":
      calculation();
      displayOutput();
      break;
    case "0":
      expression += "0";
      displayOutput();
      break;
    case "1":
      expression += "1";
      displayOutput();
      break;
    case "2":
      expression += "2";
      displayOutput();
      break;
    case "3":
      expression += "3";
      displayOutput();
      break;
    case "4":
      expression += "4";
      displayOutput();
      break;
    case "5":
      expression += "5";
      displayOutput();
      break;
    case "6":
      expression += "6";
      displayOutput();
      break;
    case "7":
      expression += "7";
      displayOutput();
      break;
    case "8":
      expression += "8";
      displayOutput();
      break;
    case "9":
      expression += "9";
      displayOutput();
      break;
    case ".":
      expression += ".";
      displayOutput();
      break;
    case "c":
      displayOutput("C");
      break;
    case "del":
      displayOutput("DEL");
      break;
  }
}

function calculation() {
  let extractedExpresion = [];
  let ctr = 0;
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "×" ||
      expression[i] === "÷"
    ) {
      extractedExpresion.push(Number(expression.slice(ctr, i)));
      extractedExpresion.push(expression[i]);
      ctr = i + 1;
    }
  }
  extractedExpresion.push(Number(expression.slice(ctr, expression.length + 1)));
  console.log(extractedExpresion);

  let num1 = 0;
  let num2 = 0;
  let result = 0;

  for (let i = 0; i < extractedExpresion.length; i++) {
    if (extractedExpresion[i] === "×" || extractedExpresion[i] === "÷") {
      num1 = extractedExpresion[i - 1];
      num2 = extractedExpresion[i + 1];
      let operation = extractedExpresion[i];

      switch (operation) {
        case "×":
          result = num1 * num2;
          extractedExpresion.splice(i - 1, 3, result);
          break;
        case "÷":
          result = num1 / num2;
          extractedExpresion.splice(i - 1, 3, result);
          break;
      }
      i--;
    }
  }

  for (let i = 0; i < extractedExpresion.length; i++) {
    if (extractedExpresion[i] === "+" || extractedExpresion[i] === "-") {
      let num1 = extractedExpresion[i - 1];
      let num2 = extractedExpresion[i + 1];
      let operation = extractedExpresion[i];

      switch (operation) {
        case "+":
          result = num1 + num2;
          extractedExpresion.splice(i - 1, 3, result);
          break;
        case "-":
          result = num1 - num2;
          extractedExpresion.splice(i - 1, 3, result);
          break;
      }
      i--;
    }
  }
  expression = extractedExpresion;
}

function displayOutput(character) {
  if (character === "C") {
    expression = "";
  } else if (character === "DEL") {
    expression = expression.slice(0, expression.length - 1);
  }
  display.innerHTML = expression;
}
