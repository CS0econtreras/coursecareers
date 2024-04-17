const theString = "Ezequiel"
const theChar = '|'
const theInt = 1

let newStr = ""
for(let i = 0; i <= theString.length - 1; i++){
    if(i != 0 && i % theInt === 0){
        newStr += theChar
    }
    const char = theString[i]
    newStr += char;
}



console.log(newStr)