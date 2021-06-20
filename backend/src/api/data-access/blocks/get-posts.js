'use strict';

const User = require('../models/db-models').user;	//import User mongoose model
const Post = require('../models/db-models').post;	//import Post mongoose model

//crop text function import
const { cropTextTo, log } = require('../../../utils/utils');

 const getPosts = async () => {
  const res = [];

  await Post.find({}, 'title content date author')
    .sort({ date: -1 })
    .limit(4)
    .then(async posts => {
      for (const post of posts)
        await User.find({ 'login': post.author }, 'avatar', (err, user) => {
          if (!err) {
            const date = post.date;

            res.push({
              user: {
                username: post.author,
                avatar: user.avatar,
              },
              post: {
                title: cropTextTo(post.title, 14),
                text: cropTextTo(post.content, 60),
                date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
              },
            });
          } else
            log(err.message, 'err:getPosts');
        });
    })
    .catch(e => log(e.message, 'err:getPosts'));

  return res;
}

module.exports = getPosts;
