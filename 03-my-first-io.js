var fs = require('fs');

// read file
var file = fs.readFileSync(process.argv[2]);
// convert buffer to string
var string = file.toString();
// count new lines
console.log(string.split('\n').length - 1);