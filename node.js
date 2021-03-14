let noun1 = 'cat';
let adjective = 'grey';
let noun2 = 'dog';
let verb = 'run';
let noun3 = 'beef';


console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];


////////////////////////////////
// Accessing a Process Object //
////////////////////////////////

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

//////////////////////
// WRITABLE STREAMS //
//////////////////////
// create a writable stream to a file using fs.createWriteStream() method
// example below

const fs = require('fs')
// set the output to output.txt
const fileStream = fs.createWriteStream('output.txt');
// unlike a readable stream which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method
fileStream.write('This is the first line!');
fileStream.write('This is the second line!');
fileStream.end();

//////////////////////////////
//  Create an HTTP Server   //
//////////////////////////////
// https://nodejs.org/api/http.html
// the http.createServer() method returns an instance of an http.server.
// an http.server has a method .listen() which causes the server to listen for incoming connections.
//When we run http.createServer() we pass in a custom callback function(requestListener). 
//The callback function will be triggered once the serve is listening and receives a request.
// EXAMPLE //

// require the http core module
const http = require('http');

// invoked http.createServer() method with the requestListener callback. Similar to running the .on() of an EventEmitter. The requestListener will execute whenever an http request is sent to the server on the correct port
let requestListener = (request, response) => {
    // the header communicates that the file type is text, rather than something like audio or compressed data.
    response.writeHead(22, {'Content-Type': 'text/plain'});
    response.write('Hello World!/n');
    response.end();
};
// server variable is assigned to the return value of the http.createServer() method
const server = http.createServer(requestListener);
// starts the server at port 3000. Every server on a given machine specifies a unique port so that traffice can be correctly routed.
server.listen(3000);


