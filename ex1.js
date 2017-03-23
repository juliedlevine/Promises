var fs = require ('fs-promise');
var filename = 'file1.txt';

fs.readFile(filename)
    .then(function(buffer) {
        var content = buffer.toString();
        console.log(content.toUpperCase());
    })
    .catch(function(err) {
        console.log('Something went wrong.');
        console.log('Because: ', err.message);
    });
