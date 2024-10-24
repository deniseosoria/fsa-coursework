function rand(limit) {
    return Math.round(Math.random() * limit);
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9); // Return the converted Celsius value
}

function createMessage(fahrenheit) {
    const celsius = convertToCelsius(Fahrenheit);  // Convert it to Celsius

    // Construct the message based on the Fahrenheit value
    let message;
    if (fahrenheit < 65) {
        message = `So it feels cold.`;
    } else if (fahrenheit > 80){
        message = `So it feels hot.`;
    }
        else{
            message = `So it feels just right.`;
        }

    return `${fahrenheit} Fahrenheit is ${ celsius} Celcius. ${message} `; // Display the message
}

console.log('Enter a Farenheit number, we will convert that number from Farenheit to Celsius', farenheit);
let convertedCelsius= convertToCelsius(fahrenheit);
createMessage();
