//This how we grab a bunch of values from html nice and clean
function getPasswordLength(){
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties(){
    //using an array and forloop to get all the values in the password proporties section
    const ids = ["lowercase", "uppercase", "numbers", "special"]
    //we will generate an object that uses the id as a key and true or false as its value
    const properties = {};
    for (const id of ids){
        const element = document.getElementById(id);
        properties[id] = element.checked //checked will give us key id and value true false for our checkbox 
    //value is different than checked
    }
    return properties;
}

//generate a function that gets all lowercase letters using ASCII values
function getChars(lowercase = true){
    const start = lowercase ? 97 : 65;
    let chars = [];
    for(let i = start; i < start + 26; i++){
        chars.push(String.fromCharCode(i))//we pass in i to fromCharCode to get the correct char using the ascii code
    }
    return chars;
}

function getNumbers(){
    const nums = []
    for(i = 0; i < 10; i++){
        nums.push(i);
    }
    return nums;
}

const lowercasechars = getChars(true);
const uppercasechars = getChars(false);
const numbers = getNumbers();
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    const characters = []; //... pushes all the characters into the array instead a full array
    //And you don't need a forloop 
    if(properties.lowercase) characters.push(...lowercasechars);
    if(properties.uppercase) characters.push(...uppercasechars);
    if(properties.numbers) characters.push(...numbers);
    if(properties.special) characters.push(...special);

    if(characters.length === 0) {
        return alert("You must select at least one set of characters");
    }
    console.log(characters);
        
    let pwd = [];
    for(let i = 0; i < length; i++) {
        // Line below keeps the length randomly inbetween the floor and input length
        const randomIdx = Math.floor(Math.random() * characters.length)
        const char = characters[randomIdx];
        pwd.push(char);
    }
    //join("") that empty element joins all the characters in pwd into a string
    const pwdString = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>";
}