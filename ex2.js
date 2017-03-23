var fs = require ('fs-promise');

var filename = 'file2.txt';
var outputFilename = 'output.txt';

// fs.readFile(filename)
//     .then(function(buffer) {
//         var content = buffer.toString().toUpperCase();
//         console.log('Done reading ' + filename);
//         return fs.writeFile(outputFilename, content);
//     })
//     .then(function() {
//         console.log('Wrote contents to ' + outputFilename);
//     })
//     .catch(function(err){
//         console.log('Something went wrong.');
//         console.log('Because: ', err.message);
//     });


function readAndWrite(filename) {
    return fs.readFile(filename)
        .then(function(buffer) {
            var content = buffer.toString().toUpperCase();
            console.log('Done reading ' + filename);
            return fs.writeFile(outputFilename, content);
        });
}

readAndWrite(filename)
    .then(function() {
        console.log('Wrote contents to ' + outputFilename);
    })
    .catch(function(err){
        console.log('Something went wrong.');
        console.log('Because: ', err.message);
    });
