const api = require('./api');
const passport = require('./passport');
const swagger = require('./swagger');

module.exports = (app) => {
  api(app);
  passport(app);
  swagger(app);
};
