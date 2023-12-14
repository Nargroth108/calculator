add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

let display = '';

let firstNumber = null;
let operator = null;
let secondNumber = null;
let numNext = true;

function operate(operator, firstNumber, secondNumber) {
    if(operator === ' + ') {
        firstNumber = add(firstNumber, secondNumber);
        return firstNumber
    } else if(operator === ' - ') {
        firstNumber = subtract(firstNumber, secondNumber);
        return firstNumber
    } else if(operator === ' * ') {
        firstNumber = multiply(firstNumber, secondNumber);
        return firstNumber
    } else if(operator === ' / ') {
        firstNumber = divide(firstNumber, secondNumber);
        return firstNumber
    }
};

const numBtn = document.querySelectorAll('.number');
numBtn.forEach(function(button) {
    button.addEventListener('click', () => {
        let text = button.textContent;
        display += text;
        document.querySelector('#display').textContent = display;
        if (numNext === true) {
            numNext = false;
            opBtn.forEach((button) => {
                button.disabled = false;
            });
        };
    });
});

const opBtn = document.querySelectorAll('.operation');
opBtn.forEach(function(button) {
    button.addEventListener('click', () => {
        let text = button.textContent;
        display += text;
        document.querySelector('#display').textContent = display;
        numNext = true;
        opBtn.forEach((button) => {
            button.disabled = true;
        });
    });
});

const clearBtn = document.querySelector('.C');
clearBtn.addEventListener('click', () => {
    display = '';
    firstNumber = secondNumber = operator = null;
    document.querySelector('#display').textContent = display;
    numNext = true;
    opBtn.forEach((button) => {
        button.disabled = false;
    });
});

const equalBtn = document.querySelector('.E');
equalBtn.addEventListener('click', () => {

})