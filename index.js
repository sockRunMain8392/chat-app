var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

//const server = http.createServer(app);
//const { Server } = require('socket.io');
//const io = new Server(server);

//app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, function() {
  console.log('Chat server running');
});

var io = require('socket.io');

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});
