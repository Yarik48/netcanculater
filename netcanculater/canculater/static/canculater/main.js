let firstNumber = null;
let operator = null;

function addNumber(num) {
     let display = document.getElementById("display");
     display.value += num;
}

function addOperator(op) {
     let display = document.getElementById("display");
     firstNumber = parseFloat(display.value);
     operator = op;
     display.value = "";
}

function clearDisplay() {
     let display = document.getElementById("display");
     display.value = "";
     firstNumber = null;
     operator = null;
}

function calculate() {
     let display = document.getElementById("display");
     let secondNumber = parseFloat(display.value);

     switch(operator) {
          case "+":
               display.value = firstNumber + secondNumber;
               break;
          case "-":
               display.value = firstNumber - secondNumber;
               break;
          case "*":
               display.value = firstNumber * secondNumber;
               break;
          case "/":
               display.value = firstNumber / secondNumber;
          case "%":
               display.value = firstNumber % secondNumber;
               break;
               break;
          default:
               break;
     }

     firstNumber = null;
     operator = null;
}
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')
function autoExpand(element) {
     element.style.height = "auto";
     element.style.height = element.scrollHeight + "px";
}