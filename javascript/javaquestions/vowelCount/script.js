function countVowelsAndConsonants (inputString) {
    let vowelCount = 0
    let consonants = 0
    const vowels = ["a", "e", "i", "o", "u"];
    //I didn't need to split the string in to an array of strings in the line below i can iterate through a string without splitting
    const inputArray = inputString.split("");
    //i can iterate through a string without splitting
    for (const input of inputString) {
        //i can put .toLowerCase to make sure it counts it even if it is uppercase
        if (vowels.includes(input.toLowerCase())){
            vowelCount++;
        }else if (input.toLowerCase() !== input.toUpperCase()) {
            consonants++;
        }
    }
    console.log("vowels: ", vowelCount, "consonants: ", consonants);
}

const result = countVowelsAndConsonants("ezequiel")