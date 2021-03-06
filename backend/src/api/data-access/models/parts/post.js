'use strict';

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  date: Date,
  content: String,
  tags: Array,
});

const Post = mongoose.model('Post', postSchema, 'Post');

module.exports = Post;
