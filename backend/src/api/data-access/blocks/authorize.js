'use strict';

const bcrypt = require('bcrypt');

const User = require('../models/db-models').user;	//import User mongoose model
const { log } = require('../../../utils/utils'); //logger import

const checkData = async (login, password) => {
  let res;

  await User.findOne({ login }, 'login password salt')
    .then(user => {
      const salt = user.salt;
      const passwordEnc = bcrypt.hashSync(password, salt);
      passwordEnc === user.password ? (
        log('User %s logged in', 'authorization', login),
        res = true
      ) : (
        log('Failed authorization for user %s', 'authorization', login),
        res = false
      );
    })
    .catch(err => (
      log(err.message, 'authorization'),
      res = false
    ));

  return res;
};

module.exports = checkData;
