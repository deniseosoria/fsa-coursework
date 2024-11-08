// let userResponse = prompt("Enter froyo flavors");

// const froyo = {
//     vanilla: 0,
//     strawberry: 0,
//     coffee: 0,
// }

// const orderArray = userResponse.split(",")

    
//     for (let index = 1; index < orderArray.length; index++) {
//         if (orderArray[index] == "vanilla") {
//             froyo.vanilla ++
//         }        
//     }

//     for (let index = 1; index < orderArray.length; index++) {
//         if (orderArray[index] == "strawberry") {
//             froyo.strawberry ++
//         }        
//     }

//     for (let index = 1; index < orderArray.length; index++) {
//         if (orderArray[index] == "coffee") {
//             froyo.coffee ++
//         }        
//     }

//     console.table(froyo);




let userResponse = prompt("Enter froyo flavors");


//Created an object called froyo, with a property called flavors.
const froyo = {
    flavors: {}
};

//The split(",") method separates the string into parts whenever it encounters a comma, creating an array
const orderArray = userResponse.split(",");


//Go through each item in the array 
orderArray.forEach(flavor => {
    //Trim spaces around the flavor to avoid issues with extra whitespace
    flavor = flavor.trim();
    //If the flavor is already in the array of flavors, increment the flavor count. 
    if (froyo.flavors[flavor]){
        froyo.flavors[flavor]++

    // Else if the flavor is not in the array of flavors, initializing the count for this flavor at 1 because it’s the first time we’re seeing it.
    }else {
        froyo.flavors[flavor] = 1
    }
})

console.table(froyo.flavors);