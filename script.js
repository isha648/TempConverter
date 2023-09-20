

function convert() {
    let Input = parseFloat(document.getElementById('Input').value);
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let AnswerElement = document.getElementById('Answer');
    let hotOrColdMessage = "";

    if (isNaN(Input)) {
        AnswerElement.innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    switch (unit) {
        case 'celsius':
            let fahrenheit = (Input * 9/5) + 32;
            hotOrColdMessage = fahrenheit > 90 ? 'Hot' : 'Cold';
            AnswerElement.innerHTML = `${Input}°C is ${fahrenheit}°F (${hotOrColdMessage})`;
            break;
        case 'fahrenheit':
            let celsius = (Input - 32) * 5/9;
            hotOrColdMessage = celsius > 32 ? 'Hot' : 'Cold';
            AnswerElement.innerHTML = `${Input}°F is ${celsius}°C (${hotOrColdMessage})`;
            break;
    }
}
