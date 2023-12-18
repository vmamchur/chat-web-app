const { Message } = require('../models');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('send_message', async ({ text, senderId, receiverId }) => {
      const message = await Message.create({
        text,
        senderId,
        receiverId,
      });

      io.to(receiverId).emit('receive_message', message);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};
