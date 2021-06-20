'use strict';

const mongoose = require('mongoose');

const { log } = require('../utils/utils');

//mongoose.Promise = require('bluebird');

const dbConnect = dbPath => {
  mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'mongo: connection error:'));
  db.once('open', () => log('Congrats, the connection successfully set :)', 'mongo'));
};

module.exports = dbConnect;
