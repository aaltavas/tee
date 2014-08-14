var fs = require('fs');
var text = fs.createWriteStream(process.argv[2]);

console.log("Please enter what you want to put in the text file.");

process.stdin.pipe(process.stdout);
process.stdin.pipe(text);