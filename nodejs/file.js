var fs = require('fs');
fs.readFile('./resource.json', {'encoding': 'utf-8'}, function(er, data) {
    if (er) {
        console.log(er);
    }
    console.log(data);
});
