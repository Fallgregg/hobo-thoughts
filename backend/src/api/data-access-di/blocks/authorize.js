'use strict';

const bcrypt = require('bcrypt');

const checkData = async data => {
  let res;

  data = JSON.parse(data);

  await User.findOne({ login: data.login }, 'login password salt')
    .then(user => {
      const salt = user.salt;
      const passwordEnc = bcrypt.hashSync(data.password, salt);
      passwordEnc === user.password ? (
        log('User %s logged in', 'authorization', data.login),
        res = true
      ) : (
        log('Failed authorization for user %s', 'authorization', data.login),
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
