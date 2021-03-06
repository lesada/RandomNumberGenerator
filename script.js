let min = document.getElementById("min");
let max = document.getElementById("max");
let negative = document.getElementById("negativeNumbers");
let decimal = document.getElementById("decimalNumbers");
let decimalPlaces = document.getElementById("decimalPlaces");


function generate() {
    let minValue = parseInt(min.value);
    let maxValue = parseInt(max.value);

    let randomNumber;
    let decimalPlacesValue

    if (decimal.checked === true) {
        if ((decimalPlaces.value > 0))
        decimalPlacesValue = parseInt(decimalPlaces.value);
    else
        alert("Please insert a valid number")
    }

    if (!minValue || !maxValue)
        alert("Please insert values")
    else if (minValue > maxValue)
        alert("Min value must be less than max value");
    else if (!negative.checked && (minValue < 0 || maxValue < 0))
        alert("Check the negative numbers option");
    else if (decimal.checked === true) {
        randomNumber = parseFloat(Math.random() * (maxValue - minValue) + minValue).toFixed(decimalPlacesValue);
    }
    else {
        randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    if (randomNumber)
        document.getElementById("result").innerHTML = `Result: ${randomNumber}`;

}

function enablePlaces() {
    if (decimal.checked === true)
        decimalPlaces.disabled = false;
    else {
        decimalPlaces.disabled = true;
        decimalPlaces.value = "";
    }
}