
function getNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

function add() {
    let [a, b] = getNumbers();
    document.getElementById("result").innerHTML = a + b;
}

function subtract() {
    let [a, b] = getNumbers();
    document.getElementById("result").innerHTML = a - b;
}

function multiply() {
    let [a, b] = getNumbers();
    document.getElementById("result").innerHTML = a * b;
}

function divide() {
    let [a, b] = getNumbers();

    if (b == 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML = a / b;
    }
}

function prime() {
    let [a] = getNumbers();
    let count = 0;

    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        document.getElementById("result").innerHTML = "Prime Number";
    } else {
        document.getElementById("result").innerHTML = "Not Prime";
    }
}

function evenOdd() {
    let [a] = getNumbers();

    if (a % 2 == 0) {
        document.getElementById("result").innerHTML = "Even Number";
    } else {
        document.getElementById("result").innerHTML = "Odd Number";
    }
}

function factorial() {
    let [a] = getNumbers();
    let fact = 1;

    for (let i = 1; i <= a; i++) {
        fact = fact * i;
    }

    document.getElementById("result").innerHTML = fact;
}

function largest() {
    let [a, b] = getNumbers();

    if (a > b) {
        document.getElementById("result").innerHTML = a + " is largest";
    } else {
        document.getElementById("result").innerHTML = b + " is largest";
    }
}

function positiveNegative() {
    let [a] = getNumbers();

    if (a > 0) {
        document.getElementById("result").innerHTML = "Positive";
    } else if (a < 0) {
        document.getElementById("result").innerHTML = "Negative";
    } else {
        document.getElementById("result").innerHTML = "Zero";
    }
}

function square() {
    let [a] = getNumbers();
    document.getElementById("result").innerHTML = a * a;
}

function cube() {
    let [a] = getNumbers();
    document.getElementById("result").innerHTML = a * a * a;
}
