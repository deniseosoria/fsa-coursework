let myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

console.table(myInstruments);

myInstruments.unshift("saxophone");

console.table(myInstruments);

myInstruments.splice(3,1);

console.table(myInstruments);

myInstruments.push("tuba","bassoon");

console.table(myInstruments);

console.log(getFirstInstruments(myInstruments));

console.log(getLastInstrument(myInstruments));
console.table(getFirstAndLastInstruments(myInstruments));

console.table(getFirstThreeInstruments(myInstruments));

console.table(getTInstruments(myInstruments))

function getFirstInstruments(instruments){
    return instruments[0];
}

function getLastInstrument(instruments){
    let index= instruments.length-1;
    return instruments[index];
}

function getFirstAndLastInstruments(instruments){
    let firstInstrument= getFirstInstruments(instruments);
    let lastInstrument= getLastInstrument(instruments);

    const newArray= [firstInstrument,lastInstrument];
    return newArray;
}

function getFirstThreeInstruments(instruments){
    return instruments.slice(0,3);
}

function getTInstruments(instruments){
    //First lets create a new array
    const tInstruments=[];

    //Loop that looks trough each index that starts with the letter t.
    for(i=0;i<instruments.length;i++){
        // Get the current instrument at index i
        let currentInstrument = instruments[i]

        // Check if the current instrument starts with the letter 't'
        if(currentInstrument.charAt(0) == 't'){
            // If it does, add it to the tInstruments array
            tInstruments.push(currentInstrument);
        }
    }

    // Return the new array with only instruments starting with 't'
    return tInstruments;
}