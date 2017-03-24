var request = require('request-promise');
var fs = require('fs-promise');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';

function saveWebPage(url, filename) {
    return request.get(url)
        .then(function(html) {
            return fs.writeFile(filename, html);
        });
}

saveWebPage(url, filename)
    .then(function() {
        console.log('Worked');
    })
    .catch(function(err) {
        console.log(err.message);
    });
