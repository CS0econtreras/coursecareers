/*Non split impementation
we stored each char in the current word until we he a " " or the end of the string
the we comapred the length the othe longest word and the current word to see if it was longer */
function findLongestWord (sentence) {
    let longestWord = "";
    let currentWord = "";
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }
        else {
            currentWord += sentence[i];
        }
    }
    return longestWord;
}

const result = findLongestWord("Ezequiel is smart and awesome");
console.log(result);




/*implementation uisng the .split() function:

 function findLongestWord (sentance) {
     let longestWord = "";
     const sentanceWords = sentance.split(" ");
     for (const word of sentanceWords) {
         if (word.length > longestWord.length) {
             longestWord = word;
         }
     }
     return longestWord
 }

 const result = findLongestWord("Ezequiel is amazing and smart")
 console.log(result)*/