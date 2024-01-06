const usersService = require('../services/users.service');

const usersController = {
  getAll: async (req, res) => {
    const { searchValue } = req.query;

    try {
      const users = await usersService.getAll(req.user.id, searchValue);

      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = usersController;
