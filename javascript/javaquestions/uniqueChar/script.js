function findUniqueCharacters (str) {
    const uniqueChars = new Map();
    for (const char of str) {
        if (uniqueChars.has(char)) {
            uniqueChars.values += 1;
        }
        else{
            uniqueChars.set(char, 1)
        }
    }
    console.log(uniqueChars);
}

const result = findUniqueCharacters("yyyy");
console.log(result);