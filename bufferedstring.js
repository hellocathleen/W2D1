var https = require('https');

function getAndPrintHTML () {
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
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

getAndPrintHTML();
