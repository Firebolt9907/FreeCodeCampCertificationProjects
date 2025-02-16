const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

clearBtn.addEventListener('click', () => {
    userInput.value = "";
    resultsDiv.innerHTML = "";
});

checkBtn.addEventListener('click', () => {
    const text = userInput.value;
    if (!text || text.trim() === "") {
        alert("Please provide a phone number");
        return;
    }
    const result = telephoneCheck(text);
    resultsDiv.innerHTML = result.toString();
});

function telephoneCheck(text) {
    var modText = text;
    var number = text.replace(/[^0-9]/g, '');

    if (checkValidCharacters(modText)) {
        console.log("Invalid US number (1): " + text);
        return "Invalid US number: " + text;
    }

    if (checkNumberLength(number)) {
        console.log("Invalid US number (2): " + text);
        return "Invalid US number: " + text;
    }

    if (number.length === 11) {
        if (text.charAt(0) != 1) {
            console.log("Invalid US number (3): " + text);
            return "Invalid US number: " + text;
        }
        modText = text.split('').slice(1).join('');
    }

    var parenthesesCheck = checkParentheses(modText);
    if (parenthesesCheck[0]) {
        if (!(parenthesesCheck[1])) {
            console.log("Invalid US number (4): " + text);
            return "Invalid US number: " + text;
        }
        modText = modText.replace(/[()]/g, '');
    }

    modText = modText.replace(" ", '');
    var dashesCheck = checkDashes(modText);
    if (dashesCheck[0]) {
        console.log("Invalid US number (5): " + text);
        return "Invalid US number: " + text;
    }

    if (dashesCheck[1]) {
        if (!(dashesCheck[2])) {
            console.log("Invalid US number (6): " + text);
            return "Invalid US number: " + text;
        }
        modText = modText.replace("-", '');
    }
    return "Valid US number: " + text;
}

function checkValidCharacters (modText) {
    const regex = /[^0-9-()-\s-\-]/g;
    var matchesRegex = regex.test(modText);
    return matchesRegex;
}

function checkNumberLength(number) {
    return number.length != 10 && number.length != 11;
}

function checkParentheses(modText) {
    return [modText.charAt(0) === "(" || modText.charAt(4) === ")", modText.charAt(0) === "(" && modText.charAt(4) === ")"];
}

function checkDashes(modText) {
    var splitText = modText.split('-');
    return [modText.split('-').length > 3, modText.split('-').length === 3, splitText[0].length == 3 && splitText[1].length == 3 && splitText[2].length == 4];
}