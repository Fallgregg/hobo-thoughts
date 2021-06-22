'use strict';

const bcrypt = require('bcrypt');

const registerUser = async data => {
  let feedback = false;
  let createAllow = true;

  data = JSON.parse(data);

  await User.findOne({ login: data.login })
    .then(post => {
      if (!!post) {
        log('The same login already registered', 'err:registration');
        createAllow = false;
      } else
        log('Login is free', 'registration');
    })
    .catch(err => log(err.message, 'err:registration'));

  const salt = bcrypt.genSaltSync(10);
  const passwordEnc = bcrypt.hashSync(data.password, salt);

  if (createAllow)
    await User.create({
      login: data.login,
      password: passwordEnc,
      name_surname: data.nameSurname,
      avatar: '',
      salt: salt,
    })
      .then(() => {
        log('New user was registered', 'registration');
        feedback = true;
      })
      .catch(err => log(err.message, 'err:registration'));

  return feedback;
};

module.exports = registerUser;
