var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  //console.log(this);
  if (req.url == '/') {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    // I want to use a named callback function and I do using bind to pass the 'this' object (undefined here as I don't need it)
    // and extra arguments req and res
    fs.readFile('./titles.json', processTitles.bind(undefined, req, res));
  }
}).listen(3000);

// Note the extra req and res arguments.
// This breaks the convention of having err first.
function processTitles(req, res, err, data) {
  if (err) {
    console.error(err);
    res.end('Server Error');
  } else {
    var titles = JSON.parse(data.toString());
    fs.readFile('./template.html', function(err, data) {
      if (err) {
        console.error(err);
        res.end('Server Error');
      } else {
        var tmpl = data.toString();
        var html = tmpl.replace('%', titles.join('</li><li>'));
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
      }
    });
  }
}

console.log('Server running at http://localhost:3000/');
