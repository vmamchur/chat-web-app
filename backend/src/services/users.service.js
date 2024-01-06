const { Op } = require('sequelize');

const { User } = require('../models');

const usersService = {
  getAll: async (currentUserId, searchValue) => {
    try {
      const where = {
        id: {
          [Op.ne]: currentUserId,
        },
      };

      if (searchValue) {
        where.displayName = {
          [Op.like]: `%${searchValue}%`,
        };
      }

      const users = await User.findAll({
        where,
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
