function findUniqueCharacters (str) {
    let uniqueChars = '';
    const charCount = {};
//in this object i am checking for indefined keys and defining them
    for (const char of str) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        }else{
            charCount[char] += 1;
        }
    }
//Here we are going through the string and if the char is === 1 we enter it int a string of unique chars
    for (const char of str) {
        if (charCount[char] === 1) {
            uniqueChars += char
        }
    }
    return uniqueChars;
}

const result = findUniqueCharacters("ezequiel");
console.log(result)