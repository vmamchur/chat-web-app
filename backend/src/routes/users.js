const router = require('express').Router();
const passport = require('passport');

const { User } = require('../models');

/**
 * GET /api/users/current
 * @summary Get currently logged in user
 * @tags Users
 * @security JWT
 * @return {User} 200 - User
 */
router.get('/current', passport.authenticate('jwt'), async (req, res) => {
  try {
    const currentUser = await User.findByPk(req.user.id);

    if (!currentUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(currentUser);
  } catch (error) {
    console.error(error);
  }
});

/**
 * GET /api/users
 * @summary Get users list
 * @tags Users
 * @security JWT
 * @return {Array.<User>} 200 - Users list
 */
router.get('/', passport.authenticate('jwt'), (req, res, next) => {
  User.findAll()
    .then((keys) => res.json(keys))
    .catch(next);
});

module.exports = router;
