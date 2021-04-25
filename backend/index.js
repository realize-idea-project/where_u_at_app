const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3001;

io.on('connection', socket => {
  console.log('A user connected :D');
  socket.on('chat message', message => {
    console.log(message);
    io.emit('chat message', message);
    console.log('i sent message to client')
  });
});

server.listen(port, () => console.log('server is running on port: ' + port));