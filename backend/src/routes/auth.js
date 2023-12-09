const router = require('express').Router();

const { User } = require('../models');
const {
  createAndSaveAuthTokens,
  createAndSaveResetPasswordToken,
} = require('../helpers/tokens');

/**
 * @typedef {object} AuthData
 * @property {string} email
 * @property {string} password
 */

/**
 * POST /api/login
 * @summary Login user
 * @tags Auth
 * @param {AuthData} request.body.required - User login data
 * @return {AuthTokensData} 200 - User Tokens
 */
router.post('/login', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  if (!user || !user.isEqualPassword(req.body.password)) {
    res.status(401).json({
      key: 'error.login-or-password',
      message: 'No such user or password is invalid',
    });
    return;
  }

  const tokenData = await createAndSaveAuthTokens(user, req);
  res.json(tokenData);
});

/**
 * @typedef {object} AuthTokenRefreshData
 * @property {string} id - User id
 * @property {string} refreshToken
 */

/**
 * POST /api/auth-token-refresh
 * @summary issue new access and refresh tokens
 * @tags Auth
 * @param {AuthTokenRefreshData} request.body.required - User Tokens
 * @return {AuthTokensData} 200 - New tokens
 */
router.post('/auth-token-refresh', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: {
        id: req.body.userId,
        refreshToken: req.body.refreshToken,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  if (!user) {
    res.status(401).json({ key: 'error.token-expired' });
    return;
  }

  const tokenData = await createAndSaveAuthTokens(user, req);
  res.json(tokenData);
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
