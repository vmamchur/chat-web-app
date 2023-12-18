const { User } = require('../models');
const { createAndSaveAuthTokens } = require('../helpers/tokens');

const authService = {
  registerUser: async (userData) => {
    try {
      const user = await User.create(userData);

      const { accessToken, refreshToken } = await createAndSaveAuthTokens(user);

      return {
        user,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.error(error);
    }
  },

  loginUser: async (username, password) => {
    try {
      const user = await User.findOne({
        where: {
          username,
        },
      });

      if (!user || !user.isEqualPassword(password)) {
        throw new Error('Invalid username or password');
      }

      const { accessToken, refreshToken } = await createAndSaveAuthTokens(user);

      return { user, accessToken, refreshToken };
    } catch (error) {
      console.error(error);
    }
  },

  refreshTokens: async (refreshToken) => {
    let user;

    try {
      user = await User.findOne({
        where: {
          refreshToken,
        },
      });
    } catch (error) {
      console.error(error);
    }

    if (!user) {
      throw new Error('Invalid refresh token');
    }

    const { accessToken, refreshToken: updatedRefreshToken } =
      await createAndSaveAuthTokens(user);

    return { user, accessToken, refreshToken: updatedRefreshToken };
  },
};

module.exports = {
  authService,
};
