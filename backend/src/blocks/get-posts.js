const User = require('../models/user');	//import User mongoose model
const Post = require('../models/post');	//import Post mongoose model

const crop = require('../misc/crop-title-content'); //crop title & contens functions import

async function getPosts() {
	let res = [];

	await Post.find({}, "title content date author", (err, post) => {
		for (let i = 0; i < post.length; i++)
			User.find({"login": post[i].author}, "avatar", (err, user) => {
				
				let date = post[i].date;
	
				res.push({
					user: {
						username: post[i].author,
						avatar: user.avatar,
					},
						post: {
						title: crop.title(post[i].title),
						text: crop.content(post[i].content),
						date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
					},
				});
			})
	}).limit(4);

	return res;
}

module.exports = getPosts;