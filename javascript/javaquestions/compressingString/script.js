function compressString(str){
    if (str.length <= 1) return str;

    let compressed = "";
    let currentChar = str[0];
    let count = 1;
    
    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        }
        else {
            compressed += currentChar + (count > 1 ? count : "");
            count = 1;
            currentChar = str[i];
        }
    }
    compressed += currentChar + (count > 1 ? count : "");
    return compressed;
}

console.log(compressString("aaabbc"));
