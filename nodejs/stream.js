var fs = require('fs');
var stream = fs.createReadStream('./resource.json', {encoding: 'utf-8'});

stream.on('data', function(chunk) {
    console.log(chunk);
});

stream.on('end', function() {
    console.log('finished');
});
