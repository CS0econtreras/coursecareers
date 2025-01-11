function isPalindrome (str) {
    let palindromeStr = "";
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) {
        //if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))
        if (str[i] !== " " && str[i] !== ","){
            palindromeStr += str[i].toLowerCase();
        }
    }
    console.log(palindromeStr);
    end = palindromeStr.length - 1;

    while (start < end) {
        if(palindromeStr[start] !== palindromeStr[end]) {
            return false
        }
        start++;
        end--;
    }

    return true;
}


const result = isPalindrome("A man, a plane, a canal, Panamae");
console.log(result)
