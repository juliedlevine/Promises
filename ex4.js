var request = require('request-promise');
var fs = require ('fs-promise');

var urls = [
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
];

var filenames = [
    'futureswiki.html',
    'cpswiki.html',
    'jswiki.html',
    'nodewiki.html',
    'chromewiki.html'
];

var urlGet = urls.map(function(url) {
    return request.get(url);
});

Promise.all(urlGet)
    .then(function(html) {
        console.log('Done get request.');
        var writeFiles = html.map(function(eachHtml) {
            filenames.map(function(eachFile) {
                return fs.writeFile(eachFile, eachHtml);
            });
        });
        return writeFiles;
    })
    .then(function() {
        console.log('Wrote html to each filename.');
    })
    .catch(function(err) {
        console.log('Something went wrong.');
        console.log('Because ' + err.message);
    });
