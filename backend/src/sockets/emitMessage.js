const emitMessage = (req, { userId, message }) =>
  req.io.to(req.socketIds[userId]).emit('message', message);

module.exports = emitMessage;
