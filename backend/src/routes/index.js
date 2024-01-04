const router = require('express').Router();

const auth = require('./auth.route');
const users = require('./users.route');
const messages = require('./messages.route');

router.use('/', auth);
router.use('/users', users);
router.use('/messages', messages);

module.exports = router;
