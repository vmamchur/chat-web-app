const { authService } = require('../services/auth.service');

const authController = {
  registerUser: async (req, res) => {
    const { username, displayName, email, password } = req.body;
    const userData = {
      username,
      displayName,
      email,
      password,
    };

    try {
      const { user, accessToken, refreshToken } =
        await authService.registerUser(userData);

      res.json({
        user,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  },

  loginUser: async (req, res) => {
    const { username, password } = req.body;

    try {
      const { user, accessToken, refreshToken } = await authService.loginUser(
        username,
        password
      );

      res.json({
        user,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  },

  refreshTokens: async (req, res) => {
    const { refreshToken } = req.body;

    try {
      const {
        user,
        accessToken,
        refreshToken: updatedRefreshToken,
      } = await authService.refreshTokens(refreshToken);

      res.json({ user, accessToken, refreshToken: updatedRefreshToken });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = {
  authController,
};
