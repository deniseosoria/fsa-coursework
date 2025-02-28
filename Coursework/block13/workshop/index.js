//Creates a random number.
function rand(limit) {
    return Math.round(Math.random() * limit);
}

//Converts Farenheit to Celsius.
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9); // Return the converted Celsius value
}

//Creates a message depending on the Farenheit value.
function createMessage(fahrenheit) {
    //Create a celsuis variable to be used in this function.
    const celsius = convertToCelsius(fahrenheit);  // Convert to Celsius

    // Construct the message based on the Fahrenheit value.

    let message;

    //Multiphy variable by 1 to make sure variable is a number.
    let numFahrenheit = fahrenheit*1;

    if (numFahrenheit < 65) {
        message = "So it feels cold.";
    } else if (numFahrenheit < 100) {
        message = "So it feels hot.";
    } else {
        message = "So it feels very hot.";
    }

    console.log("Result: " + fahrenheit + "°F is " + celsius.toFixed(2) + "°C. " + message);
    alert("Result: " + fahrenheit + "°F is " + celsius.toFixed(2) + "°C. " + message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let fahrenheit = prompt(fahrenheitPrompt);
createMessage(+fahrenheit);

alert("Let's try that again.");
fahrenheit = prompt(fahrenheitPrompt);
createMessage(+fahrenheit);

alert("Let's try some random temperatures.");
fahrenheit = rand(110);
createMessage(fahrenheit);

fahrenheit = rand(110);
createMessage(fahrenheit);

