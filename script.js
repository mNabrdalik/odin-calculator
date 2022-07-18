const numDisplay = document.querySelector('#numDisplay');
const numBtn = document.querySelectorAll('.num');
const clearBtn = document.querySelector('#clear');
const deletBtn = document.querySelector('#delete');

function add() {

}

function substract() {

}

function multiply() {

}

function divide() {

}

function calculate() {
    
}

numBtn.forEach((element) => {
    element.addEventListener('click', () => {
        if (numDisplay.innerText == "0") {
            numDisplay.innerText = "";
        }
        numDisplay.innerText += element.value;
    });
});

clearBtn.addEventListener('click', () => {
    numDisplay.innerText = "0";
});

deletBtn.addEventListener('click', () => {
    numDisplay.innerText = "";
});