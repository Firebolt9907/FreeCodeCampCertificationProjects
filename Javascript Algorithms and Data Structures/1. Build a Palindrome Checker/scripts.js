const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const alertText = document.getElementById('alert');

checkButton.addEventListener('click', () => {
    const text = textInput.value;
    const result = palindromeChecker(text);
    if (result.isAlert) {
        alertText.innerHTML = result.alert;
        alertText.style.visibility = "visible";
        alertText.style.height = "auto";
        alertText.style.margin = "auto";
    }
});

function palindromeChecker(text) {
    var alert = "";
    if (text === "") {
        alert = "Please input a value";
        return Output(true, "Alert: " + alert, false);
    }
    return [true, "", cleanedText === reversedText];
}