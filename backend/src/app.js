const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const { PORT } = require('./config/constants');
const configure = require('./config');
const sequelize = require('./config/db');
const routes = require('./routes');
const sockets = require('./sockets');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

configure(app);
app.use('/api', routes);
sockets(io);

sequelize.authenticate().then(() => {
  server.listen(PORT, () => {
    console.log(`⚡ Server Listening on port ${PORT}`);
  });
});
