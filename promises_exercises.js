var fs = require ('fs-promise');

fs.readFile('file3.txt')
    .then(function(buffer) {
        console.log('Contents of file 1', buffer.toString());
        return fs.readFile('file2.txt');
    })
    .then(function(buffer) {
        console.log('Contents of file 2', buffer.toString());
    })
    .catch(function(err) {
        console.log('Something went wrong.');
        console.log('Because ' + err.message);
    });
