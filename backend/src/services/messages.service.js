const { Op } = require('sequelize');

const { Message, User } = require('../models');

const messagesService = {
  getAll: async (currentUserId, chatUserId) => {
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          {
            senderId: currentUserId,
            receiverId: chatUserId,
          },
          {
            senderId: chatUserId,
            receiverId: currentUserId,
          },
        ],
      },
      include: [
        {
          model: User,
          as: 'sender',
          attributes: ['id', 'username', 'email'],
        },
        {
          model: User,
          as: 'receiver',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });

    return messages;
  },

  create: async (text, senderId, receiverId) => {
    const createdMessage = await Message.create({
      text,
      senderId,
      receiverId,
    });

    const message = await Message.findOne({
      where: { id: createdMessage.id },
      include: [
        {
          model: User,
          as: 'sender',
          attributes: ['id', 'username', 'email'],
        },
        {
          model: User,
          as: 'receiver',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });

    return message;
  },
};

module.exports = messagesService;
