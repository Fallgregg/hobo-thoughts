'use strict';

const Router = require('koa-router');
const HttpStatus = require('http-status');

const api = require('../api/api');

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

  router.get('/log-in', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = '';
    await next();
  });

  router.get('/log-in/:l/:p', async (ctx, next) => {  //authorize
    ctx.status = HttpStatus.OK;
    ctx.body = await api.authorize(
      ctx.params.l,
      ctx.params.p
    );
    await next();
  });

  router.get('/sign-up/:l/:p/:nameSurname', async (ctx, next) => {  //add profile to database
    ctx.status = HttpStatus.OK;
    ctx.body = await api.registerUser(
      ctx.params.l,
      ctx.params.p,
      ctx.params.nameSurname
    );
    await next();
  });

  router.get('/add-comment/:author/:post_id/:content', async (ctx, next) => { //create new comment
    ctx.status = HttpStatus.OK;
    ctx.body = await api.addNewComment(
      ctx.params.author,
      ctx.params.post_id,
      ctx.params.content,
    );
    await next();
  });

  router.get('/delete-comment/:id', async (ctx, next) => { //delete new comment
    ctx.status = HttpStatus.OK;
    ctx.body = await api.deleteComment( ctx.params.id );
    await next();
  });

  router.get('/set-like/:author/:post_id/:mark', async (ctx, next) => { //set a new like/dislike
    ctx.status = HttpStatus.OK;
    ctx.body = await api.setLike(
      ctx.params.author,
      ctx.params.post_id,
      ctx.params.mark,
    );
    await next();
  });

  router.get('/settings', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = '';
    await next();
  });

  router.get('/post/:id', async (ctx, next) => {  //show post closer + show comments and likes
    ctx.status = HttpStatus.OK;
    ctx.body = await api.openPost(ctx.params.id);
    await next();
  });

  router.get('/post/add-post/:author/:title/:content/:tags', async (ctx, next) => { //create new post
    ctx.status = HttpStatus.OK;
    ctx.body = await api.addNewPost(
      ctx.params.author,
      ctx.params.title,
      ctx.params.content,
      ctx.query.tags,
    );
    await next();
  });

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initRoutes;
