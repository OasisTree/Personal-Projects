const button = document.querySelectorAll(".button");
let expression = "";
const display = document.querySelector("#result");

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", handleClick)
}

function handleClick() {
    let operation = this.getAttribute("value");

    switch(operation) {
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
            expression += "=";
            calculation();
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
        case "C":
            expression += "C";
            break;
        case "DEL":
            expression += "DEL";
            break;
    }
}

function calculation() {
    

}

function displayOutput() {
    display.innerHTML = expression;

}

