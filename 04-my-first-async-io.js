var fs = require('fs');

// read file
var file = fs.readFile(process.argv[2], function(err, data) {
  // convert buffer to string
  var string = data.toString();
  // count new lines
  console.log(string.split('\n').length - 1);
});