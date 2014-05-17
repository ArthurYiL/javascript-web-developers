var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    // this refers to the channel
    // each client is a socket passed to the callback in net.createServer
    console.log('client joined ' + id);
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            this.clients[id].write(senderId + ' said: ' + message);
        }
    }
    this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function(client) {
    var id = client.remoteAddress + ':' + client.remotePort;

    // emitting here because 'connect' event is not firing below
    channel.emit('join', id, client);

    //client.on('connect', function() {
    //    channel.emit('join', id, client);
    //});

    client.on('data', function(data) {
        data = data.toString();
        channel.emit('broadcast', id, data);
    });

});
server.listen(8888);

console.log('Server running at http://localhost:8888/');
