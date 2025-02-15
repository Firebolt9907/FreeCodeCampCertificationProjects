const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const alertText = document.getElementById('alert');
const resultText = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const text = textInput.value;
    const result = palindromeChecker(text);
    if (result[0]) {
        alert("Please input a value");
    } else {
        resultText.innerHTML = text + (result[2] ? " is a palindrome." : " is not a palindrome.");
    }
});

function palindromeChecker(text) {
    var alert = "";
    if (text === "") {
        alert = "Please input a value";
        return [true, "Alert: " + alert, false];
    } 
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    return [false, "", cleanedText === reversedText];
}