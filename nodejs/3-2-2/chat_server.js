var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    // this refers to the channel
    // each client is a socket passed to the callback in net.createServer
    // 'join' runs once for each client connected
    console.log('client joined ' + id);
    this.clients[id] = client;

    this.subscriptions[id] = function(senderId, message) {
        console.log('running broadcast for id ' + id + ' and senderId ' + senderId);
        if (id != senderId) {
            this.clients[id].write(senderId + ' said: ' + message);
        }
    }

    // When a client joins the channel, a broadcast listener is registered for the client,
    // which means there are many broadcasts listeners, one per client.
    // On broadcast, from any client, all the callbacks in this.subscriptions run.
    this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function(id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id + " has left the chat.\n");
});

channel.on('shutdown', function() {
    channel.emit('broadcast', '', "Chat has shutdown.\n");
    channel.removeAllListeners('broadcast');
});

channel.on('error', function(err) {
    console.log('ERROR: ' + err.message);
});

var server = net.createServer(function(client) {
    var id = client.remoteAddress + ':' + client.remotePort;

    // when this code runs the connection has been established
    // emitting here because 'connect' event is not firing below
    channel.emit('join', id, client);

    // so, there's no need to emit 'join' like this
    //client.on('connect', function() {
    //    channel.emit('join', id, client);
    //});

    client.on('data', function(data) {
        data = data.toString();

        if (data == "shutdown\r\n") {
            channel.emit('shutdown');
        }

        if (data == "bad\r\n") {
            channel.emit('error', new Error('Something is wrong.'));
        }

        channel.emit('broadcast', id, data);
    });

    client.on('close', function() {
        channel.emit('leave', id);
    });

});
server.listen(8888);

console.log('Server running at http://localhost:8888/');
