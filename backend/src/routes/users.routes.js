const router = require('express').Router();
const passport = require('passport');

const usersController = require('../controllers/users.controller');

/**
 * GET /api/users
 * @summary Get all Users
 * @tags Users
 * @security JWT
 * @return {Array<User>} 200 - Created Users list
 */
router.get('/', passport.authenticate('jwt'), usersController.getAll);

module.exports = router;
