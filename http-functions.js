module.exports = function getHTML (options, callback) {
    var https = require('https');
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
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};