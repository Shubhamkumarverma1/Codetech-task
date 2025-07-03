const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});

let documentData = "";

io.on('connection', (socket) => {
  socket.emit('load-document', documentData);

  socket.on('send-changes', (data) => {
    documentData = data;
    socket.broadcast.emit('receive-changes', data);
  });
});

server.listen(3001, () => console.log('Server running on port 3001'));
