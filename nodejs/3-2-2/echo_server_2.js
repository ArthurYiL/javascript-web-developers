var net = require('net');

var server = net.createServer(socketListener);

function socketListener(socket) {
    // this in this context is the server
    socket.on('data', sendEcho);
}

function sendEcho(data) {
    // this in this context is the socket
    var socket = this;
    socket.write(data);
}

server.listen(8888);
