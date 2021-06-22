'use strict';

const User = require('../models/db-models').user;	//import User mongo model
const Post = require('../models/db-models').post;	//import Post mongo model

//crop text function & logger import
const { cropTextTo, log } = require('../../../utils/utils');

const getPosts = async (tags) => {
  const res = [];
  let query = {};

  if (!!tags) query = {tags: { $in: [ tags ]}};

  await Post.find(query, 'title content date author tags')
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
                date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
                tags: post.tags
              },
            });
          } else {
            log(err.message, 'err:get-posts');
            return;
          }
        });
        log('Posts are out now', 'get-posts');
    })
    .catch(e => log(e.message, 'err:get-posts'));

  return res;
}

module.exports = getPosts;
