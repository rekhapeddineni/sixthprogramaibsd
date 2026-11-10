
"use strict";

// Get HTML elements
const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");

// Read and validate input
function getNumber(input) {
    if (input.value.trim() === "") {
        throw new Error("Please enter a number.");
    }

    const number = Number(input.value);

    if (!Number.isFinite(number)) {
        throw new Error("Please enter a valid number.");
    }

    return number;
}

// Display result
function showResult(message) {
    result.textContent = message;
}

// Check integer input
function requireInteger(number) {
    if (!Number.isSafeInteger(number)) {
        throw new Error("This operation requires a safe integer.");
    }
}

// Check prime number
function isPrime(number) {
    requireInteger(number);

    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }

    return true;
}

// Calculate factorial
function findFactorial(number) {
    requireInteger(number);

    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    if (number > 170) {
        throw new Error("Please enter a number up to 170.");
    }

    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

// Perform selected operation
function calculate(operation) {
    try {
        const a = getNumber(firstInput);
        const binaryOperations = ["add", "subtract", "multiply", "divide", "largest"];
        const b = binaryOperations.includes(operation)
            ? getNumber(secondInput)
            : null;

        let answer;

        switch (operation) {
            case "add":
                answer = a + b;
                break;

            case "subtract":
                answer = a - b;
                break;

            case "multiply":
                answer = a * b;
                break;

            case "divide":
                if (b === 0) {
                    throw new Error("Cannot divide by zero.");
                }
                answer = a / b;
                break;

            case "prime":
                answer = isPrime(a) ? "Prime Number" : "Not a Prime Number";
                break;

            case "evenOdd":
                requireInteger(a);
                answer = a % 2 === 0 ? "Even Number" : "Odd Number";
                break;

            case "factorial":
                answer = findFactorial(a);
                break;

            case "largest":
                answer = Math.max(a, b);
                break;

            case "positiveNegative":
                answer = a > 0 ? "Positive" :
                         a < 0 ? "Negative" : "Zero";
                break;

            case "square":
                answer = a ** 2;
                break;

            case "cube":
                answer = a ** 3;
                break;

            default:
                throw new Error("Unknown operation.");
        }

        if (typeof answer === "number" && !Number.isFinite(answer)) {
            throw new Error("Result is outside the supported number range.");
        }

        showResult("Result: " + answer);

    } catch (error) {
        showResult(error.message);
    }
}

// Handle all calculator buttons
buttons.addEventListener("click", function(event) {
    const button = event.target.closest("button[data-operation]");

    if (!button) return;

    calculate(button.dataset.operation);
});
