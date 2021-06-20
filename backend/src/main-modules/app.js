'use strict';

const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const Logger = require('koa-logger');
const cors = require('koa-cors');

const { log } = require('../utils/utils');

const startApp = async port => {
  const app = new Koa();

  const PORT = port || 3000;

  app.use(BodyParser());
  app.use(Logger());
  app.use(cors());

  require('./routes')(app);

  app.listen(PORT, log('To see an app visit http://localhost:%s/', 'start', PORT));

  return app;
};

module.exports = startApp;
