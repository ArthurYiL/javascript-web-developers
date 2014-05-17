var net = require('net');

var server = net.createServer(function(socket) {
    // echoes just once
    socket.once('data', function(data) {
        socket.write(data);
    });
});

server.listen(8888);
