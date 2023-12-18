const router = require('express').Router();

const auth = require('./auth.routes');
const users = require('./users.routes');

router.use('/', auth);
router.use('/users', users);

module.exports = router;
