const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultText = document.getElementById('results-div');

clearButton.addEventListener('click', () => {
    userInput.value = "";
    resultText.innerHTML = "";
});

checkButton.addEventListener('click', () => {
    const text = userInput.value;
    if (!text || text.trim() === "") {
        alert("Please provide a phone number");
        return;
    }
    const result = telephoneCheck(text);
    resultText.innerHTML = result;
});

function telephoneCheck(text) {
    modText = text;
    const regex = /[^0-9-()-\s-\-]/g;
    var matchesRegex = regex.test(text);
    if (matchesRegex) {
        return "Invalid US number: " + text;
    }
    var number = Number(text.replace(/[^0-9]/g, ''));
    if (number.toString().length != 10 || number.toString().length != 11) {
        return "Invalid US number: " + text;
    }
    if (number.toString().length === 11) {
        if (number.toString().charAt(0) != 1) {
            return "Invalid US number: " + text;
        }
        number -= 10^10;
        modText = text.split('').slice(1).join('');
    }
    if (modText.charAt(0) === "(" || modText.charAt(4) === ")") {
        if (!(modText.charAt(0) === "(" && modText.charAt(4) === ")")) {
            return "Invalid US number: " + text;
        }
        modText = modText.replace(/[()]/g, '');
    }
    if (modText.split('-').length > 3) {
        return "Invalid US number: " + text;
    }
    if (modText.split('-').length === 3) {
        var splitText = modText.split('-');
        if (splitText[0].length != 3 || splitText[1].length != 3 || splitText[2].length != 4) {
            return "Invalid US number: " + text;
        }
        modText = modText.replace("-", '');
    }
    return "Valid US number: " + text;
}