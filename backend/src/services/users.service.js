const { Op } = require('sequelize');

const { User } = require('../models');

const usersService = {
  getAll: async (currentUserId) => {
    try {
      const users = await User.findAll({
        where: {
          id: {
            [Op.ne]: currentUserId,
          },
        },
        attributes: {
          exclude: ['resetPasswordToken'],
        },
      });

      return users;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = usersService;
