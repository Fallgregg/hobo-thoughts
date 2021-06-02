const User = require('../models/user');	//import User mongoose model
const Post = require('../models/post');	//import Post mongoose model
const relSubscriptions = require('../models/relSubscriptions');	//import Subscriptions relation mongoose model

const crop = require('../misc/crop-title-content'); //crop title & contens functions import

async function getProfileInfo(id) { 
    let profile = [];
    let readyFlag = 0;

    await User.findOne({"login": id}, "login").then(async (user) => {
            profile.login = user.login;
            relSubscriptions.find({"follower" : "Fallgregg"}, (errFR, follower) => {
                if (!errFR) profile.follower = follower.length;
            });
            relSubscriptions.find({"followed" : "Fallgregg"}, (errFD, followed) => {
                if (!errFD) profile.followed = followed.length;
            });
            await Post.find({"author": user.login}, "title content date", (errP, post) => {
                if (!errP) {
                    profile.posts = [];
                    for (let i = 0; i < post.length; i++) {
                        let date = post[i].date;
                        profile.posts[i] = {
                            title: crop.title(post[i].title),
                            text: crop.content(post[i].content),
                            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
                        }
                    }
                    readyFlag = 1;
                }
            }).limit(2);
    })
    return profile;
}

module.exports = getProfileInfo;