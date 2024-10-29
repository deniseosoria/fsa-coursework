function rand(limit) {
    return Math.round(Math.random() * limit);
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9); // Return the converted Celsius value
}

function createMessage(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);  // Convert to Celsius

    // Construct the message based on the Fahrenheit value
    let message;
    if (fahrenheit < 65) {
        message = `So it feels cold.`;
    } else if (fahrenheit > 80) {
        message = `So it feels hot.`;
    } else {
        message = `So it feels just right.`;
    }
    
    
    return `Result: ${fahrenheit} Fahrenheit is ${celsius.toFixed(2)} Celsius. ${message}`;
}

// Add event listener to the button to trigger the prompt and display the result
document.getElementById('convertButton').addEventListener('click', () => {
    let fahrenheit = parseFloat(prompt('Enter a Fahrenheit number, we will convert it to Celsius'));

    // Display the result in the <p> element
    document.getElementById('result').textContent = createMessage(fahrenheit);
});
