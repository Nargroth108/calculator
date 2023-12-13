add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

let firstNumber;
let operator;
let secondNumber;

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
}

console.log(operate("/", 12, 6))