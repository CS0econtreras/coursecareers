//resultText is equal to the first element in the html file that has the class result-text
const resultText = document.getElementsByClassName("result-text")[0];
//temp values the will be used then reused and we use the calculator
let storedvalue = null;
let operator = null;
//function for each number we press
function onNumberPressed(number) {
    //checks if we clicked the "."
    if(number === "."){
        //checks if the length of our string in the span tag is = 0/empty and if resultText has a "." already in it
        if(resultText.innerHTML.length === 0 || resultText.innerHTML.includes(".")) {
        return;
        }
    }
    //if those edgecases go through then we will convert the number clicked to a string and add it to resultText
    resultText.innerHTML += number.toString()
}

//helper function for at least one number 
function canOperate(){
    return resultText.innerHTML.length >= 1;
}

//function that will do the the opperation when the equal button is pressed 
function operate(number){
    //temp result variable that will be output on the screen
    let result;
    //switch statment that make sure we implement the correct operation
    switch (operator){
        case "+":
            result = storedvalue + number;
            break;

        case "-":
            result = storedvalue - number;
            break;

        case "x":
            result = storedvalue * number;
            break;

        case "/":
            result = storedvalue / number;
            break;
    }
    //here we made the resultText == to the answer. we alo made the storedvalue and operator null
    //we did that so that when we click on another operation it will take the resultText.inner = result as the const number created
    resultText.innerHTML = result;
    storedvalue = null;
    operator = null;
}

function onOperationPressed(operation) {
    //grabbing whatever float number and store it for later use
    const number = parseFloat(resultText.innerHTML);
    //we check if resultText.innerhtml.length is >= 1
    if(!canOperate()) return;
    //checks if we clicked == and that storedvalue is not equal to null if so return operate function
    if(operation === "=" && storedvalue != null){
        return operate(number);
    }

    else if (operation === 'c'){
        storedvalue = null;
        operator = null;
    }else{
        operator = operation;
        storedvalue = number;
    }

    resultText.innerHTML = "";

}