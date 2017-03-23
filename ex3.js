var request = require('request-promise');
var fs = require ('fs-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';


request.get(url)
    .then(function(html) {
        console.log('Done get request.');
        return fs.writeFile(filename, html);
    })
    .then(function() {
        console.log('Wrote html to ' + filename);
    })
    .catch(function(err) {
        console.log('Something went wrong.');
        console.log('Because ' + err.message);
    });
