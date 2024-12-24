const resultText = document.getElementsByClassName("result-text")[0];

let storedValue = null;
let operator = null;

function onNumberPressed(number) {
    if (number === ".") {
        if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes(".")) 
            return;
    }
    resultText.innerHTML += number.toString();
}

function canOperate() {
    return resultText.innerHTML.length >= 1;
}

function operate(number) {
    if (!storedValue || !operator) return;

    let result;
    switch (operator) {
        case "+":
            result = storedValue + number;
            break;
        case "-":
            result = storedValue - number;
            break;
        case "x":
            result = storedValue * number;
            break;
        case "/":
            if (number === 0) {
                resultText.innerHTML = "Error";
                storedValue = null;
                operator = null;
                return;
            }
            result = storedValue / number;
            break;
        default:
            return;
    }

    resultText.innerHTML = result.toString();
    storedValue = null;
    operator = null;
}

function onOperationPressed(operation) {
    const number = parseFloat(resultText.innerHTML);

    if (!canOperate()) return;

    if (operation === "=" && storedValue !== null) {
        operate(number);
    } else if (operation === "c") {
        storedValue = null;
        operator = null;
        resultText.innerHTML = ""; // Clear the display
    } else {
        operator = operation;
        storedValue = number;
        resultText.innerHTML = ""; // Clear the input for the next number
    }
}
