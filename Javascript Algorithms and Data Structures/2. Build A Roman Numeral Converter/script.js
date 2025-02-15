const submitButton = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');
const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

submitButton.addEventListener('click', () => {
    const num = number.value;
    output.innerHTML = convertToRoman(num);
});

function convertToRoman(num) {
    if (num == null || num == 0) {
        return "Please input a valid number";
    }
    if (num < 1) {
        return "Please enter a number greater than or equal to 1";
    }
    if (num > 3999) {
        return "Please enter a number less than or equal to 3999";
    }
    let result = "";
    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            result += key;
            num -= romanNumerals[key];
        }
    }
    return result;
}