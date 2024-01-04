const router = require('express').Router();
const passport = require('passport');

const messagesController = require('../controllers/messages.controller');

/**
 * GET /api/messages/:userId
 * @summary Get messages by userId
 * @tags Messages
 * @security JWT
 * @param {string} userId.path - User id
 * @return {array<Message>} 200 - Messages list
 * */
router.get(
  '/:userId',
  passport.authenticate('jwt'),
  messagesController.getByUserId
);

/**
 * POST /api/messages/:userId
 * @summary Send message to user
 * @tags Messages
 * @security JWT
 * @param {string} userId.path - User id
 * @param {string} request.body.text.required - Message text
 * @return {Message} 200 - Created message
 * */
router.post('/:userId', passport.authenticate('jwt'), messagesController.send);

module.exports = router;
