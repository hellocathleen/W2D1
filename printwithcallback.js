var https = require('https');

function getHTML (options, callback) {
    var options = {
        host: requestOptions.host,
        path: requestOptions.path
    }

    https.get(options, function(response){
        response.setEncoding('utf8');
        var bufferedString = '';
        response.on('data', function(data){
            bufferedString += data;
        });
        response.on('end', function() {
            callback(bufferedString);
        })
    });
};

function printHTML (html) {
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

getHTML({}, printHTML);
