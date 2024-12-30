
function tempConverter () {
    const userInput = document.getElementById("temp").value;
    const inputInt = parseFloat(userInput);
    const fahrenheit = inputInt * (9/5) + 32
    document.getElementById("conversion").innerHTML = "<p>"+ "Conversion is degrees " + fahrenheit + " Fahrenheit" + "</p>"
}