/*function weakPassword (passWord) {
    let passWordPoints = 0;
    let numsIncluded = false;
    let lowersIncluded= false;
    let uppersIncluded = false;
    let specialsIncluded = false;
    
    const uppers =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
        "X", "Y", "Z"];
    const lowers = uppers.map(str => str.toLowerCase());
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specials = ["%", "^", "&", "*", "(", ")", "@", "!", "#", "$"];

    if(passWord.length >= 10) passWordPoints++;
    
    for (let i = 0; i < passWord.length; i++) {
        if(!uppersIncluded || !lowersIncluded || !numsIncluded || !specialsIncluded) {
            if (uppers.includes(passWord[i]) && !uppersIncluded){
                passWordPoints++;
                uppersIncluded = true;
            }
            if(lowers.includes(passWord[i]) && !lowersIncluded){
                lowersIncluded = true;
                passWordPoints++;
            }
            if(numbers.includes(passWord[i]) && !numsIncluded) {
                numsIncluded = true;
                passWordPoints++;
            }
            if(specials.includes(passWord[i]) && !specialsIncluded){
                specialsIncluded = true;
                passWordPoints++;
            }
        }
    }
    return passWordPoints;

}*/

function weakPassword (passWord) {
    let strength = 0;

    if(passWord.length >= 10) strength++;

    if(passWord.toLowerCase() !== passWord) strength++;

    if(passWord.toUpperCase() !== passWord) strength++;

    if(passWord.split('').some(char => '%^&*()@#!$'.includes(char)))
        strength++;

    if (passWord.split('').some(char => !isNaN(char))) strength++;

    return strength;
}

console.log(weakPassword("E"));