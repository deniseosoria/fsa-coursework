// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

function getLength(numbers) {
    return numbers.length;
}

function getSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;

}

function getMean(numbers) {
    let mean = getSum(numbers)/numbers.length;
    return mean;
}

function getMin(numbers) {
 // Initialize min with the first element of the array
  let min = numbers[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i]; // Update min if a smaller value is found
    }
  }

  return min; // Return the smallest value
}

function getMax(numbers) {
 // Initialize max with the first element of the array
 let max = numbers[0];

 // Loop through the array starting from the second element
 for (let i = 1; i < numbers.length; i++) {
   if (numbers[i] > max) {
     max = numbers[i]; // Update max if a larger value is found
   }
 }

 return max; // Return the largest value
}

function getRange(numbers) {
    return getMax(numbers)-getMin(numbers);
}

function getEvens(numbers) {
    //First lets create a new array
    const evenNumbers=[];

    //Loop that looks for all even numvers.
    for(i=0;i<numbers.length;i++){
        // Get the current number at index i
        let currentNumber = numbers[i]

        // Check if the current number is an even number
        if(currentNumber%2===0){
            // If it is even, add it to the numbers array
            evenNumbers.push(currentNumber);
        }
    }

    // Return the new array with only even numbers
    return evenNumbers;
}

function getOdds(numbers) {
    //First lets create a new array
    const oddNumbers=[];

    //Loop that looks for all odd numvers.
    for(i=0;i<numbers.length;i++){
        // Get the current number at index i
        let currentNumber = numbers[i]

        // Check if the current number is an odd number
        if(currentNumber % 2 !==0){
            // If it is odd, add it to the numbers array
            oddNumbers.push(currentNumber);
        }
    }

    // Return the new array with only odd numbers
    return oddNumbers;
}