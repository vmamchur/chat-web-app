const { User } = require('../models');

module.exports = (io, socketIds) => {
  io.on('connection', (socket) => {
    socket.on('join', async (userId) => {
      socketIds[userId] = socket.id;

      const user = await User.findByPk(userId);
      user.isOnline = true;
      user.lastSeen = new Date();
      await user.save();

      socket.broadcast.emit('userOnline', userId);
    });

    socket.on('disconnect', async () => {
      const userId = Object.keys(socketIds).find(
        (key) => socketIds[key] === socket.id
      );

      if (!userId) {
        return;
      }

      delete socketIds[userId];

      const user = await User.findByPk(userId);
      user.isOnline = false;
      user.lastSeen = new Date();
      await user.save();

      socket.broadcast.emit('userOffline', userId);
    });
  });
};
