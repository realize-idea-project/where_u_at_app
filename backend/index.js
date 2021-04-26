const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

// io.on('connection', socket => {
//   console.log('A user connected :D');
//   socket.on('chat message', message => {
//     console.log(message);
//     io.emit('chat message', message);
//     console.log('i sent message to client')
//   });
// });

io.on('connection', socket => {
  console.log('A user connected :D');

  socket.on('send-location', (geolocation) => {
    console.log('geolocation', geolocation);
    socket.emit('receive-location', geolocation);
    console.log('delevered');
    // io.emit('receive-location', geolocation);
    // console.log('delevered2');
  })
})

server.listen(port, () => console.log('server is running on port: ' + port));