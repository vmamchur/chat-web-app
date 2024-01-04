const messagesService = require('../services/messages.service');
const emitMessage = require('../sockets/emitMessage');

const messagesController = {
  getByUserId: async (req, res) => {
    const { userId } = req.params;

    try {
      const messages = await messagesService.getAll(req.user.id, userId);

      res.json(messages);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  send: async (req, res) => {
    const { userId } = req.params;
    const { text } = req.body;

    try {
      if (!text) {
        throw new Error('Message text is required');
      }

      const message = await messagesService.create(text, req.user.id, userId);

      emitMessage(req, { userId, message });

      res.json(message);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = messagesController;
