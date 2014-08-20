var http = require('http');
var fs = require('fs');

// passing arguments down the callback chain

http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile('./titles.json', function(err, data) {
      processTitles(err, data, req, res);
    });
  }
}).listen(3000);

function processTitles(err, data, req, res) {
  // I can see all arguments passed to any function
  //console.log(arguments);
  if (err) {
    console.error(err);
    res.end('Server Error');
  } else {
    var titles = JSON.parse(data.toString());
    fs.readFile('./template.html', function(err, data) {
      processTemplate(err, data, req, res, titles);
    });
  }
}

function processTemplate(err, data, req, res, titles) {
  if (err) {
    console.error(err);
    res.end('Server Error');
  } else {
    var tmpl = data.toString();
    var html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }
}

console.log('Server running at http://localhost:3000/');
