var logger = require('./logger.js')

console.log(logger.endPoint);
console.log(logger.log("Hello World"));

var message = "Hello World";


const os = require('os');

console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);

