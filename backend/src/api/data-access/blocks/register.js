'use strict';

const bcrypt = require('bcrypt');

const User = require('../models/db-models').user;	//import User mongoose model
const { log } = require('../../../utils/utils'); //logger import

const registerUser = async (login, password, nameSurname) => {
  let feedback = false;

  const salt = bcrypt.genSaltSync(10);
  const passwordEnc = bcrypt.hashSync(password, salt);

  await User.create({
    login,
    password: passwordEnc,
    name_surname: nameSurname,
    avatar: '',
    salt,
  })
    .then(() => {
      log('New user was registered', 'registration');
      feedback = true;
    })
    .catch(err => log(err.message, 'err:registration'));

  return feedback;
};

module.exports = registerUser;
