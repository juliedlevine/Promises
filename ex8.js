require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');
var _ = require('lodash');

function spliceMultiple(filesArray, outputFile) {
    // Map over each file and return a read file function for each
    var filePromises = filesArray.map(function(file) {
        return fs.readFile(file);
    });
    // Start a promise for each read file function
    return Promise.all(filePromises)
        // If no errors, then get an array of content back from each fs function
        // bufferArray is what you get back from the fulfilled promise
        .then(function(bufferArray) {
            // Turn the buffers into strings, split into an array with each entry a single line from each file
            var stringArray = bufferArray.map(function(item) {
                return item.toString().split('\n');
            });
            // Zip takes index of each array and puts in a new array
            var spliced = _.zip.apply(null, stringArray);
            var newMessage = _.flatten(spliced).join('\n');

            return fs.writeFile('output8.txt', newMessage);
        });
}


var files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];

spliceMultiple(files, 'output.txt')
    .then(function() {
        console.log('It worked.');
    })
    .catch(function(err) {
        console.log(err.message);
});
