'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  name_surname: String,
  avatar: String,
  salt: String,
});

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
