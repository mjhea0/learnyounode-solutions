var fs = require('fs');
var path = require('path');


function filtered(directory, extension, callback) {
  var dirlist = fs.readdir(directory, function(err, data) {
    if (err) {
      return callback(err);
    }
    var filteredData = data.filter(function(line) {
      return line.match(extension);
    });
    return callback(null, filteredData);
  });
}


module.exports = filtered;