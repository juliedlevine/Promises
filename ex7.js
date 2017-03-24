require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');

function splice2(file1, file2, outputFile) {
    // Step 1, read the first file
    return fs.readFile(file1)
        // return contents of first file
        .then(function(content1) {
            // Step 2, read contents of second file, send those contents along wiht the first content
            return [content1, fs.readFile(file2)];
        })
        // return contents (as buffers) of both files
        .spread(function(content1, content2) {
            // Get array of strings for each file
            var lines1 = content1.toString().split('\n');
            var lines2 = content2.toString().split('\n');
            // Map over one of the files and gradually add new line from second file on a new line
            var newMessage = lines1.map(function(line, index) {
                return line + '\n' + lines2[index];
            });
            // Join new array with a line break
            var newMessageString = newMessage.join('\n');
            // Write to a new file
            return fs.writeFile(outputFile, newMessageString);

        });
}


splice2('file1.txt', 'file2.txt', 'output.txt')
    .then(function() {
        console.log('It worked.');
    })
    .catch(function(err) {
        console.log(err.message);
});
