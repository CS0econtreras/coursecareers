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
    //pushing all the elements from each array into the array not the whole array do this by using spread operator ...
    const characters = [];
    if (properties.lowercase) characters.push(...lowercaseChars);
    if (properties.uppercase) characters.push(...uppercaseChars);
    if (properties.numbers) characters.push(...numbers);
    if (properties.special) characters.push(...special);
    
    if (characters.length === 0){
        return alert("You must select at least one set of the characters.");
    }

    let pwd = [];
    for (let i = 0; i < length; i++){
        //math.floor makes sure we only get values less than the length and gives a random index
        const randomIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randomIdx];
        pwd.push(char);
    }
    //convert the array into a string using join
    const pwdString = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>";
}