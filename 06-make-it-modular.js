var fs = require('fs');
var path = require('path');
var filtered = require('./mymodule');

var extension = '.' + process.argv[3];
var directory = process.argv[2];

filtered(directory, extension, function(err, data) {
  if(err) {
    console.log(err);
  } else {
    data.forEach(function(el) {
      console.log(el);
    });
  }
});