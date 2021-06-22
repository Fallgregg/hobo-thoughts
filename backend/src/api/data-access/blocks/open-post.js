'use strict';

const Post = require('../models/db-models').post;	//import Post mongo model
const Comment = require('../models/db-models').comment; //import Comment mongo model
const Like = require('../models/db-models').like; //import Like mongo model

const { log } = require('../../../utils/utils');

const showPost = async id => {
  const res = {};

  await Post.findById( id )
    .then( async post => {
      if (!!post) {
        log('The post with id %s don\'t exist', 'err:open-post', id);
        return res;
      }

      Object.assign(res, post._doc);

      await Comment.find({ post_id : id })
        .sort({ date_time: -1 })
        .limit(4)
        .then(comments =>
          res.comments = comments
        )
        .catch( e => 
          log(e.message, 'err:open-post')
        );

      res.likes = [];
      res.dislikes = [];

      await Like.find({ post_id : id })
        .then( likes => {
          for (const like of likes)
            like.value === true ?
              res.likes.push(like)
            :
              res.dislikes.push(like)
        })
        .catch( e => 
          log(e.message, 'err:open-post')
        );

        log('Opened post info out now', 'open-post')
    })
    .catch( e => 
      log(e.message, 'err:open-post')
    )
  ;

  return res;
};

module.exports = showPost;
