var fs = require ('fs-promise');
var filename = 'file1.txt';

// fs.readFile(filename)
//     .then(function(buffer) {
//         var content = buffer.toString();
//         console.log(content.toUpperCase());
//     })
//     .catch(function(err) {
//         console.log('Something went wrong.');
//         console.log('Because: ', err.message);
//     });
//
function readFileUpcase(filename) {
    return fs.readFile(filename)
        .then(function(buffer) {
            var content = buffer.toString().toUpperCase();
            return content;
    });
}

readFileUpcase('file2.txt')
    .then(function(contents) {
        console.log('File contents: ' + contents);
    })
    .catch(function(err) {
        console.log('Something went wrong.');
        console.log('Because: ', err.message);
    });
