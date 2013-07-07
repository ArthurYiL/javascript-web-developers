var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url == '/') {
    // this used a normal array
    //fs.readFile('./titles.json', function(err, data) {
    // but this uses an array of objects
    fs.readFile('./entries.json', function(err, data) {
      if (err) {
        console.error(err);
        res.end('Server Error');
      }
      else {
        // this used a normal array
        //var titles = JSON.parse(data.toString());
        // but this uses an array of objects
        var titles = []
        var entries = JSON.parse(data.toString());
        for (var i = 0; i < entries.length; i++) {
            titles.push(entries[i].title);
        }

        fs.readFile('./template.html', function(err, data) {
          if (err) {
            console.error(err);
            res.end('Server Error');
          }
          else {
            var tmpl = data.toString();
            var html = tmpl.replace('%', titles.join('</li><li>'));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
          }
        });
      }
    });
  }
}).listen(8000, "127.0.0.1");
