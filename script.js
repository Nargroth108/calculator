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
    if(operator === '+') {
        firstNumber = add(firstNumber, secondNumber);
        return firstNumber
    } else if(operator === '-') {
        firstNumber = subtract(firstNumber, secondNumber);
        return firstNumber
    } else if(operator === '*') {
        firstNumber = multiply(firstNumber, secondNumber);
        return firstNumber
    } else if(operator === '/') {
        firstNumber = divide(firstNumber, secondNumber);
        return firstNumber
    }
};

const numBtn = document.querySelectorAll('.number');
numBtn.forEach(function(button) {
    button.addEventListener('click', () => {
        display += button.textContent;
        document.querySelector('#display').textContent = display;
        if (numNext === true) {
            numNext = false;
            equalBtn.disabled = false;
            opBtn.forEach((button) => {
                button.disabled = false;
            });
        };
    });
});

const opBtn = document.querySelectorAll('.operation');
opBtn.forEach(function(button) {
    button.addEventListener('click', () => {
        display += button.textContent;
        document.querySelector('#display').textContent = display;
        numNext = true;
        equalBtn.disabled = true;
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
    equalBtn.disabled = false;
    opBtn.forEach((button) => {
        button.disabled = false;
    });
});

const equalBtn = document.querySelector('.E');
equalBtn.addEventListener('click', () => {
    let arr = display.split(' ');
    let i = arr.length;
    while (i > 2) {
        firstNumber = Number(arr[0]);
        operator = arr[1];
        secondNumber = Number(arr[2]);
        display = operate(operator, firstNumber, secondNumber);
        arr.shift();
        arr.shift();
        arr.shift();
        arr.unshift(display);
        i = arr.length;
    };
    document.querySelector('#display').textContent = display;
})