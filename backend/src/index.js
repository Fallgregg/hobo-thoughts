
const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require('koa-cors');
const HttpStatus = require("http-status");
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('./models/user');
const Post = require('./models/post');
const relSubscriptions = require('./models/relSubscriptions');

const app = new Koa();
mongoose.connect('mongodb://localhost/hobo-thoughts', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Congrats, the connection successfully set :)");
});

const PORT = process.env.PORT || 3000;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

router.get("/",async (ctx,next)=>{
	ctx.status = HttpStatus.OK;  
	ctx.body = posts;
	await next();
});

router.get("/log-in",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = "";
  await next();
});

router.get("/sing-up",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = "";
  await next();
});

router.get("/comments",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = "";
  await next();
});

router.get("/settings",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = "";
  await next();
});

router.get("/post",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = "";
  await next();
});

router.get("/profile",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = profile;
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
    console.log("==> To see an app visit http://localhost:%s/", PORT);
});

let posts = [];

Post.find({}, "title content date author", (err, post) => {
	let res = [];
	for (let i = 0; i < post.length; i++)
		User.find({"login": post[i].author}, "avatar", (err, user) => {
			
			let date = post[i].date;

			posts.push({
				user: {
					username: post[i].author,
					avatar: user.avatar,
				},
					post: {
					title: cropTitle(post[i].title),
					text: cropContent(post[i].content),
					date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
				},
			});
		})
}).limit(4);

let profile = {};

User.findOne({"login": "Fallgregg"}, "login", (errU, user) => {
	if (!errU) {
		profile.login = user.login;
		relSubscriptions.find({"follower" : "Fallgregg"}, (errFR, follower) => {
			if (!errFR) profile.follower = follower.length;
		});
		relSubscriptions.find({"followed" : "Fallgregg"}, (errFD, followed) => {
			if (!errFD) profile.followed = followed.length;
		});
		Post.find({"author": user.login}, "title content date", (errP, post) => {
			if (!errP) {
				profile.posts = [];
				for (let i = 0; i < post.length; i++) {
					let date = post[i].date;
					profile.posts[i] = {
						title: cropTitle(post[i].title),
						text: cropContent(post[i].content),
						date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
					}
				}
			}
		}).limit(2);
	}
})

function cropTitle(title) {
	let excerptTitle = title; 
	excerptTitle = excerptTitle.replace(/^(.{14}[^\s]*).*/, "$1");
	excerptTitle += "..";
	return excerptTitle;
}
function cropContent(text) {
	let excerptText = text;
	excerptText = excerptText.replace(/^(.{60}[^\s]*).*/, "$1");
	excerptText += "..";
	return excerptText;
}
/*
const profile = {
  login: "Fallgregg",
  following: 120,
  followers: 19,
  posts: [
    {
      title: "Post Title 1",
      text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
      date: "12/12/2021",
    },{
      title: "Post Title 2",
      text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
      date: "10/12/2021",
    },
  ]
};*/