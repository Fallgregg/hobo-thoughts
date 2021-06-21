'use strict';

const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
  author: String,
  post_id: String,
  value: Boolean,
});

const Like = mongoose.model('Like', likeSchema, 'Like');

module.exports = Like;
