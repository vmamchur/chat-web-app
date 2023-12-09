const express = require('express');

const { PORT } = require('./config/constants');
const configure = require('./config');
const sequelize = require('./config/db');
const routes = require('./routes');

const app = express();

configure(app);
app.use('/api', routes);

sequelize.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`⚡ Server Listening on port ${PORT}`);
  });
});
