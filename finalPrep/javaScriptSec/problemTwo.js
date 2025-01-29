/*function questionTwo (str, arr) {
    let wordsThatMatch = 0;
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < str.length; j++) {
            if (str[j].length === arr[i]) {
                wordsThatMatch++;
            }
        }
    }
    return wordsThatMatch;
}*/
//includes gets rid of the second forloop but idk if it would change the time complexity
function questionTwo (str, arr) {
    let wordsThatMatch = 0;
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i].length)) 
            wordsThatMatch++;
    }
    return wordsThatMatch;
}

let strings = ["red", "blue", "green", "yellow"];
let numbers = [3, 4, 5];

const result = questionTwo(strings, numbers);
console.log(result);