var https = require('https');

function getAndPrintHTML (host, path) {
    var requestOptions = {
        host: host,
        path: path
    };

    https.get(requestOptions, function(response){
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

// var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
// };

getAndPrintHTML('sytantris.github.io', '/http-examples/step1.html');
