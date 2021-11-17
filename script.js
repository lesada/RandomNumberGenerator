let min = document.getElementById("min");
let max = document.getElementById("max");
let negative = document.getElementById("negativeNumbers");
let decimal = document.getElementById("decimalNumbers")

function generate() {

    let minValue = parseInt(min.value);
    let maxValue = parseInt(max.value);
    let randomNumber;

    if (minValue < maxValue) {
        randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
    else {
        alert("Min value must be less than max value");
    }
    document.getElementById("result").innerHTML = `Result: ${randomNumber}`;

}