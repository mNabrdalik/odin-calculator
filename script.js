const numDisplay = document.querySelector('#numDisplay');
const prevCalc = document.querySelector('#prevCalc');
const numBtn = document.querySelectorAll('.num');
const clearBtn = document.querySelector('#clear');
const deletBtn = document.querySelector('#delete');
const dot = document.querySelector('#dot');

let num1 = 0;
let num2 = 0;

//flagto check if operator was clicked
let useOperator = true;

function add() {
    num1 += num2;
    useOperator = true;
    numDisplay.innerText = num1
}

function substract() {
    num1 -= num2;
    useOperator = true;
    numDisplay.innerText = num1
}

function multiply() {
    num1 *= num2;
    useOperator = true;
    numDisplay.innerText = num1
}

function divide() {
    num1 /= num2;
    useOperator = true;
    numDisplay.innerText = num1
}


function checkSymbol(symbol) {

    if(numDisplay.innerText.indexOf(".") > -1) {
        num2 = parseFloat(numDisplay.innerText);
        num2.toFixed(2);
    } else {
        num2 = parseInt(numDisplay.innerText);
    }

    if(prevCalc.innerText.indexOf("+") > -1) {
        add();
        prevCalc.innerText = num1 + " + ";
    } else if (prevCalc.innerText.indexOf("-") > -1) {
        substract();
        prevCalc.innerText = num1 + " - ";
    } else if (prevCalc.innerText.indexOf("*") > -1) {
        multiply();
        prevCalc.innerText = num1 + " x ";
    } else if (prevCalc.innerText.indexOf("/") > -1) {
        divide();
        prevCalc.innerText = num1 + " / ";
    } 

    if(symbol == "=") {
        prevCalc.innerText = num1 + " = ";
    }
}

function operate(symbol) {

    if (num1 !== 0) {

        checkSymbol();

    } else {
        if(numDisplay.innerText.indexOf(".") > -1) {
            num1 = parseFloat(numDisplay.innerText);
            num1.toFixed(2);
        } else {
            num1 = parseInt(numDisplay.innerText);
        }
        
        if(symbol == "+") {
            prevCalc.innerText = num1 + " + ";
        }else if(symbol == "-") {
            prevCalc.innerText = num1 + " - ";
        }else if(symbol == "*") {
            prevCalc.innerText = num1 + " * ";
        }else if(symbol == "/") {
            prevCalc.innerText = num1 + " / ";
        }
    }

    if(symbol == "+") {
        prevCalc.innerText = num1 + " + ";
    }else if(symbol == "-") {
        prevCalc.innerText = num1 + " - ";
    }else if(symbol == "*") {
        prevCalc.innerText = num1 + " * ";
    }else if(symbol == "/") {
        prevCalc.innerText = num1 + " / ";
    }

    useOperator = true;
}

numBtn.forEach((element) => {
    element.addEventListener('click', () => {
        if(useOperator) {
            numDisplay.innerText = element.value;
            useOperator = false;
        } else {
            numDisplay.innerText += element.value;
        }
    });
});

clearBtn.addEventListener('click', () => {
    numDisplay.innerText = "0";
    prevCalc.innerText = "";
    num1 = 0;
    num2 = 0;
});

deletBtn.addEventListener('click', () => {
    numDisplay.innerText = numDisplay.innerText.slice(0, -1);
});

dot.addEventListener('click', () => {
    if(numDisplay.innerText.indexOf(".") == -1) {
        numDisplay.innerText += ".";
    }

});

document.addEventListener('keydown', (event) => {
    var name = event.key;
    // var code = event.code;

    numBtn.forEach((element) => {
        if (element.value == name) {
            if(useOperator) {
                numDisplay.innerText = element.value;
                useOperator = false;
            } else {
                numDisplay.innerText += element.value;
            }
        };
    });

    if(name == "+") {
        operate('+');
    } else if(name == "-") {
        operate('-');
    } else if(name == "*") {
        operate('*');
    } else if(name == "/") {
        operate('/');
    } else if(name == "=" || name == "Enter") {
        checkSymbol('=');
    } 

    if(name == "Backspace") {
        numDisplay.innerText = numDisplay.innerText.slice(0, -1);
    }

    if(name == "Delete") {
        numDisplay.innerText = "0";
        prevCalc.innerText = "";
        num1 = 0;
        num2 = 0;
    }

    if (name == ",") {
        if(numDisplay.innerText.indexOf(".") == -1) {
            numDisplay.innerText += ".";
        }
    }

  }, false);