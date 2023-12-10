const bodyParser = require('body-parser');
const cors = require('cors');

const { FRONT_APP_URL } = require('./constants');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(
    cors({
      origin: FRONT_APP_URL,
      credentials: true,
    })
  );
};
