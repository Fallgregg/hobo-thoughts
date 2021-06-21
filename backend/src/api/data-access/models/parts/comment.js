'use strict';

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  author: String,
  date_time: Date,
  content: String,
  post_id: String,
});

const Comment = mongoose.model('Comment', commentSchema, 'Comment');

module.exports = Comment;
