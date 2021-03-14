let noun1 = 'cat';
let adjective = 'grey';
let noun2 = 'dog';
let verb = 'run';
let noun3 = 'beef';


console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];


///////////////////////////////////////////////////////////
// Accessing a Process Object //

let initialMemory = process.memoryUsage().heapUsed;
// When a user initiates the program with an additional cmd line argument, word will be assigned that value. In the terminal, run node node.js blue and it would result in word being assigned 'blue'
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

// FILE SYSTEM NOTES //
// Node fs core module is an API for interacting with the file system
// Has both synchronous & asynchronous version
// .readFile method reads data from a provided file
//EXAMPLE

// required the fs core module
const fs = require('fs');

// define an error first callback function
let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
    }
// invoked the readFile() method with three arguments
// a string that contains a path to the file
// a string specifying the files character encoding, utf-8 for text files
// callback function to be invoked when the asychronous task of reading from the file system is complete.Node will pass the contents of file.txt into the provided callback as its second argument
    fs.readFile('./file.txt', 'utf-8', readDataCallback)