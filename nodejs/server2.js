#!/usr/bin/env node

var http = require('http');

var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World even more explicit\n');
});
server.listen(3000);
console.log('Server running at http://localhost:3000/');
