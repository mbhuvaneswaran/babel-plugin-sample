var babel = require('babel-core');
var plugin = require('./babel-plugin-sample');
var fs = require('fs');
// read the filename from the command line arguments
var fileName = process.argv[2];

// read the code from this file
fs.readFile(fileName, function(err, data) {
  if(err) throw err;

  // convert from a buffer to a string
  var src = data.toString();

  // use our plugin to transform the source
  var out = babel.transform(src, {
    plugins: [plugin]
  });

  // print the generated code to screen
  console.log(out.code);
  fs.writeFile(fileName.split('.js')[0]+'-transformed.js',out.code)
});
