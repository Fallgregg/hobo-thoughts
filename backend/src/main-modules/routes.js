'use strict';

const Router = require('koa-router');
const HttpStatus = require('http-status');

const getPosts = require('../api/data-access/blocks/get-posts');
const getProfileInfo = require('../api/data-access/blocks/get-profile-info');
const authorize = require('../api/data-access/blocks/authorize');
const addNewPost = require('../api/data-access/blocks/add-post');
const registerUser = require('../api/data-access/blocks/register');

const initRoutes = (app) => {
  const router = new Router();

  router.get('/', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = await getPosts();	//fill the body in with posts info
    await next();
  });

  router.get('/profile/:id', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = await getProfileInfo(ctx.params.id);
    await next();
  });

  router.get('/log-in', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = '';
    await next();
  });

  router.get('/log-in/:l/:p', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = await authorize(ctx.params.l, ctx.params.p);
    await next();
  });

  router.get('/sign-up/:l/:p/:nameSurname', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = await registerUser(ctx.params.l, ctx.params.p, ctx.params.nameSurname);
    await next();
  });

  router.get('/comments', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = '';
    await next();
  });

  router.get('/settings', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = '';
    await next();
  });

  router.get('/post', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = '';
    await next();
  });

  router.get('/post/add-post/:author/:title/:content', async (ctx, next) => {
    ctx.status = HttpStatus.OK;
    ctx.body = await addNewPost(ctx.params.author, ctx.params.title, ctx.params.content);
    await next();
  });

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initRoutes;
