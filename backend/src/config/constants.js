require('dotenv-flow').config();
const path = require('path');

const UPLOAD_UI_PATH = '/uploads';

module.exports = {
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  FRONT_APP_URL: process.env.FRONT_APP_URL,
  AUTH_TOKEN_EXPIRATION_TIME: '30m',
  RESET_PASSWORD_TOKEN_EXPIRATION_TIME: '120m',
  UPLOAD_UI_PATH,
  UPLOAD_SERVER_PATH: path.resolve(`${__dirname}/../public${UPLOAD_UI_PATH}`),
};
