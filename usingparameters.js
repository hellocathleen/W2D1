var https = require('https');

function getAndPrintHTML (options) {
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
            console.log(bufferedString);
        })
    });
};

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

getAndPrintHTML();
