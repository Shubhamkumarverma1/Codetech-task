const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('message', msg => {
    io.emit('message', msg); // broadcast message to all clients
  });
});

http.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});

