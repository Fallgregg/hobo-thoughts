'use strict';

const Router = require('koa-router');
const HttpStatus = require('http-status');

//const api = require('../api/api');


const initRoutes = async (app) => {
  const router = new Router();

  const api = await require('../api/di')('../backend/src/api/');
  console.log(api);

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

  router.get('/log-in/:data', async (ctx, next) => {  //authorize
    ctx.status = HttpStatus.OK;
    ctx.body = await api.authorize( ctx.params.data );
    await next();
  });

  router.get('/sign-up/:data', async (ctx, next) => {  //add profile to database
    ctx.status = HttpStatus.OK;
    ctx.body = await api.registerUser( ctx.params.data );
    await next();
  });

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

  router.get('/post/add-post/:data', async (ctx, next) => { //create new post
    ctx.status = HttpStatus.OK;
    ctx.body = await api.addNewPost( ctx.params.data );
    await next();
  });

  router.get('/subscribe/:data', async (ctx, next) => { //handle subscription
    ctx.status = HttpStatus.OK;
    ctx.body = await api.subscribe( ctx.params.data );
    await next();
  });

  router.get('/unsubscribe/:data', async (ctx, next) => { //handle unsubscription
    ctx.status = HttpStatus.OK;
    ctx.body = await api.unsubscribe( ctx.params.data );
    await next();
  });

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initRoutes;
