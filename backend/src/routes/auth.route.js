const router = require('express').Router();

const { authController } = require('../controllers/auth.controller');

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
router.post('/register', authController.registerUser);

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
router.post('/login', authController.loginUser);

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
router.post('/refresh', authController.refreshTokens);

module.exports = router;
