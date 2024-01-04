module.exports = (io, socketIds) => {
  io.on('connection', (socket) => {
    console.log(' New client connected');

    socket.on('join', (userId) => {
      console.log(socketIds);
      socketIds[userId] = socket.id;
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};
