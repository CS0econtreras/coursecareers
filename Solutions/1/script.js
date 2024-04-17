const enteredNumber = prompt("Enter a number:")

// we need to convert the input from the string data type to a number
const number = Number(enteredNumber) 

const isNumberEven = number % 2 == 0  // if the remainder of a number divided by 2 is 0 it is even

if (isNumberEven) {
    alert("The number is even")
} else {
    alert("The number is odd")
}