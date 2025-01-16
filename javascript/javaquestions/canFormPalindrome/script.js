function canFormPalindrome (str) {
    let counter = 0;
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if (!charCount[key]) {
            charCount[key] = 1;
        }
        else {
            charCount[key]++;
        }
    }   

    console.log(charCount);
    for(const value in charCount) {
        if (charCount[value] % 2 !== 0){
            counter += 1;
        }
    }

    return counter <= 1;

}

console.log(canFormPalindrome("eeerreee"));
