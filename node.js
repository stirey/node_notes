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


//////////////////////////
//  READABLE STREAMS    //
//////////////////////////
// a stream is when data is read piece by piece, sequentially. this is preferable be it uses less RAM to process all of the data
// .createInterface() method reads files line by line and its from the readline core module
// .createInterface() returns an EventEmitter set up to emit 'line' events

// require in the readline and fs core modules
const readline = require('readline');
const fs = require('fs');

// we assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input
const myInterface = readline.createInterface({
    // set our input to fs.createReadStream which will create a stream from the text.txt file
    input: fs.createReadStream('text.txt')
});
// assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read
myInterface.on('line', (fileLine) => {
    // fileLine is the line just read 
    console.log(`The line read: ${fileLine}`);
});