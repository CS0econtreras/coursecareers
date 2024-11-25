const enterdNumber = prompt("Enter a number: ") //prompts user to enter the number

const number = Number(enterdNumber) //This is a converstion form a string to an int

// other option for cleaner code
// const isNumberEven = number % 2 == 0
if(number % 2 === 0){
    alert("Even")
}
else{
    alert("Odd")
}

