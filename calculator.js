"use strict";

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function performCalculation(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = (number2 === 0)
                ? "Cannot divide by zero"
                : divide(number1, number2);
            break;
        default:
            result = "Invalid Operation";
    }

    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners to buttons
['add', 'subtract', 'multiply', 'divide'].forEach(operation => {
    document.getElementById(operation).addEventListener('click', () => performCalculation(operation));
});
