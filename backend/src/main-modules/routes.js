'use strict';

const Router = require('koa-router');
const HttpStatus = require('http-status');

const api = require('../api/api');
//const api = require('../api/di')('../backend/src/api/');
//console.log(api);

const initRoutes = (app) => {
  const router = new Router();

  router.get('/general', async (ctx, next) => {  //show the most recent posts
    ctx.status = HttpStatus.OK;
    ctx.body = await api.getPosts();	//fill the body in with posts
    await next();
  });

  router.get('/general/:tags', async (ctx, next) => {  //show the most recent posts with tags received
    ctx.status = HttpStatus.OK;
    ctx.body = await api.getPosts(ctx.query.tags);	//fill the body in with posts
    await next();
  });

  router.get('/profile/:id', async (ctx, next) => { //show person's profile: login, subscriptions, posts
    ctx.status = HttpStatus.OK;
    ctx.body = await api.getProfileInfo(ctx.params.id);
    await next();
  });

  router.get('/subscribtions/:id', async (ctx, next) => { //show persons subscriptions
    ctx.status = HttpStatus.OK;
    ctx.body = await api.showSubscriptions( ctx.params.id );
    await next();
  });

  //{"login":"dimas7001","password":"dimas"}
  router.get('/log-in/:data', async (ctx, next) => {  //authorize
    ctx.status = HttpStatus.OK;
    ctx.body = await api.authorize( ctx.params.data );
    await next();
  });

  //{"login":"test01","password":"test01","nameSurname":"Name Surname"}
  router.get('/sign-up/:data', async (ctx, next) => {  //add profile to database
    ctx.status = HttpStatus.OK;
    ctx.body = await api.registerUser( ctx.params.data );
    await next();
  });

  //{"author":"_lil.pri_","post_id":"609c564badf874d10da2c2d3","content":"Mrigal, spiny-back, wallago Arctic"}
  router.get('/add-comment/:data', async (ctx, next) => { //create new comment
    ctx.status = HttpStatus.OK;
    ctx.body = await api.addNewComment( ctx.params.data );
    await next();
  });

  router.get('/delete-comment/:id', async (ctx, next) => { //delete new comment
    ctx.status = HttpStatus.OK;
    ctx.body = await api.deleteComment( ctx.params.id );
    await next();
  });

  //{"author":"_lil.pri_","post_id":"609c564badf874d10da2c2d3","value":"true"}
  router.get('/set-like/:data', async (ctx, next) => { //set a new like/dislike
    ctx.status = HttpStatus.OK;
    ctx.body = await api.setLike( ctx.params.data );
    await next();
  });

  router.get('/settings/:login', async (ctx, next) => { //show settings
    ctx.status = HttpStatus.OK;
    ctx.body = await api.showSettings( ctx.params.login );
    await next();
  });

  //{"login":"test","name_surname":"test test","avatar":"src/avatar","password":"testpass"}
  router.get('/update-settings/:newsettings', async (ctx, next) => { //change settings
    ctx.status = HttpStatus.OK;
    ctx.body = await api.updateSettings( ctx.params.newsettings );
    await next();
  });

  router.get('/post/:id', async (ctx, next) => {  //show post closer + show comments and likes
    ctx.status = HttpStatus.OK;
    ctx.body = await api.openPost(ctx.params.id);
    await next();
  });

  //{"author":"test01","title":"Tuna Ipsum","content":"Spookfish zebra oto pilchard porcupinefish worm eel.","tags":["tuna","ipsum","dolor"]}
  router.get('/post/add-post/:data', async (ctx, next) => { //create new post
    ctx.status = HttpStatus.OK;
    ctx.body = await api.addNewPost( ctx.params.data );
    await next();
  });

  //{"follower":"test01","followed":"Fallgregg"}
  router.get('/subscribe/:data', async (ctx, next) => { //handle subscription
    ctx.status = HttpStatus.OK;
    ctx.body = await api.subscribe( ctx.params.data );
    await next();
  });

  //{"follower":"test01","followed":"Fallgregg"}
  router.get('/unsubscribe/:data', async (ctx, next) => { //handle unsubscription
    ctx.status = HttpStatus.OK;
    ctx.body = await api.unsubscribe( ctx.params.data );
    await next();
  });

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initRoutes;
