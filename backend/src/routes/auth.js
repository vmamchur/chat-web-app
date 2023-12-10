const router = require('express').Router();

const { User } = require('../models');
const {
  createAndSaveAuthTokens,
  createAndSaveResetPasswordToken,
} = require('../helpers/tokens');

/**
 * @typedef {object} UserCreationData
 * @property {string} username
 * @property {string} displayName
 * @property {string} email
 * @property {string} password
 */

/**
 * POST /api/register
 * @summary Register new User
 * @tags Users
 * @param {UserCreationData} request.body.required - User registration data
 * @return {User} 200 - Created User
 */
router.post('/register', async (req, res) => {
  const { username, displayName, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      displayName,
      email,
      password,
    });

    const { accessToken, refreshToken } = await createAndSaveAuthTokens(
      user,
      req
    );

    res.json({
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
  }
});

/**
 * @typedef {object} AuthData
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {object} AuthTokensData
 * @property {User} user
 * @property {string} accessToken
 * @property {string} refreshToken
 */

/**
 * POST /api/login
 * @summary Login user
 * @tags Auth
 * @param {AuthData} request.body.required - User login data
 * @return {AuthTokensData} 200 - User Tokens
 */
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  let user;

  try {
    user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user || !user.isEqualPassword(password)) {
      res.status(401).json({
        message: 'No such user or password is invalid',
      });
      return;
    }

    const { accessToken, refreshToken } = await createAndSaveAuthTokens(
      user,
      req
    );

    res.json({ user, accessToken, refreshToken });
  } catch (error) {
    console.error(error);
  }
});

/**
 * @typedef {object} AuthTokenRefreshData
 * @property {string} refreshToken
 */

/**
 * POST /api/refresh
 * @summary issue new access and refresh tokens
 * @tags Auth
 * @param {AuthTokenRefreshData} request.body.required - User Tokens
 * @return {AuthTokensData} 200 - New tokens
 */
router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;
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
    res.status(401).json({ message: 'Invalid refresh token' });
    return;
  }

  const { accessToken, refreshToken: updatedRefreshToken } =
    await createAndSaveAuthTokens(user, req);

  res.json({ user, accessToken, refreshToken: updatedRefreshToken });
});

/**
 * @typedef {object} ForgotPasswordData
 * @property {string} email
 */

/**
 * @typedef {object} SentResponseData
 * @property {boolean} sent
 */

/**
 * POST /api/forgot-password
 * @summary Send forgot password email
 * @tags Auth
 * @param {ForgotPasswordData} request.body.required - User data
 * @return {SentResponseData} 200
 */
router.post('/forgot-password', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  if (!user) {
    res.status(404).json({ key: 'error.email-was-not-registered' });
    return;
  }

  await createAndSaveResetPasswordToken(user);

  res.json({ sent: true });
});

module.exports = router;
