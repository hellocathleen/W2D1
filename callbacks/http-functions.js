module.exports = function getHTML (options, callback) {
    var https = require('https');

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
