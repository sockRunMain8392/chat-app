var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

const { platform } = require('os');
const { kill } = require('process');
const crypto = require('crypto');


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

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});
