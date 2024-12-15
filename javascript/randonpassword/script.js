function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties(){
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    const properties = {}
    for(const id of ids){
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }

    return properties
}

//create a list of characters that we want to use. do with ASCII values
function getChars(lowercase = true) {
    const start = lowercase ? 97 : 65;
    const a = 97;
    let chars = [];

    for(let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i));
    }
    return chars
}

function getNumbers(){
    const nums = [];

    for (let i = 0; i < 10; i++){
        nums.push(i);
    }

    return nums
}

const lowercaseChars = getChars(true);
    const uppercaseChars = getChars(false);
    const numbers = getNumbers();
    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    let pwd = [];
    
    for (let i = 0; i < length; i++) {
        
    }
}