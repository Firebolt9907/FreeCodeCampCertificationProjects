const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultText = document.getElementById('result');

clearButton.addEventListener('click', () => {
    userInput.value = "";
});

checkButton.addEventListener('click', () => {
    const text = userInput.value;
    const result = telephoneCheck(text);
});

function telephoneCheck(text) {
    const regex = /[^0-9-()-\s]/g;
    resultText.innerText = regex.test(text);
}