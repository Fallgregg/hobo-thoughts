'use strict';

const User = require('../models/db-models').user;	//import User mongoose model
const Post = require('../models/db-models').post;	//import Post mongoose model
const relSubscriptions = require('../models/db-models').relSubscriptions;	//import Subscriptions relation mongoose model

const { cropTextTo, log } = require('../../../utils/utils'); //crop title & contens functions import

const getProfileInfo = async id => {
  const profile = [];

  await User.findOne({ 'login': id }, 'login').then(async user => {
    profile.login = user.login;

    await relSubscriptions.find({ 'follower': id }, async (errFR, follower) => {
      if (!errFR) profile.follower = follower.length;
      else log(errFR.message, 'err:getProfInfo');
    });
    await relSubscriptions.find({ 'followed': id }, async (errFD, followed) => {
      if (!errFD) profile.followed = followed.length;
      else log(errFD.message, 'err:getProfInfo');
    });

    await Post.find({ 'author': user.login }, 'title content date')
      .limit(2)
      .then(
        async posts => {
          profile.posts = [];
          for await (const post of posts) {
            const date = post.date;
            profile.posts.push({
              title: cropTextTo(post.title, 14),
              text: cropTextTo(post.content, 60),
              date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
            });
          }
        },
         async reason => {
          log(reason.message, 'err:getProfInfo');
        }
      );
  });
  //console.log(profile);

  return profile;
}

module.exports = getProfileInfo;
