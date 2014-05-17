var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url == '/') {
    getTitles('home', res);
  }
  if (req.url == '/test') {
    getTitles('test', res);
  }
}).listen(3000);

function getTitles(page, res) {
  fs.readFile('./titles.json', function(err, data) {
    if (err) hadError(err, res);
    getTemplate(JSON.parse(data.toString()), page, res);
  });
}

function getTemplate(titles, page, res) {
  fs.readFile('./template.html', function(err, data) {
    if (err) throw er; // alternative throwing error
    formatHtml(titles, data.toString(), page, res);
  });
}

function formatHtml(titles, tmpl, page, res) {
  var html = tmpl.replace('%', titles.join('</li><li>'));
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Refactor with named functions. Page: ' + page + '</h1>');
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.end('Server Error');
}

console.log('Server running at http://localhost:3000/');
