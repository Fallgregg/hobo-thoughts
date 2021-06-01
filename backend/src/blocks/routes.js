const Router = require("koa-router");
const HttpStatus = require("http-status");

const getPosts = require('./get-posts');
const getProfileInfo = require('./get-profile-info');
//const authorize = require('./authorize');

function initRoutes (app) {
    const router = new Router();

    router.get("/", async (ctx, next) => {
        ctx.status = HttpStatus.OK;
        ctx.body = await getPosts();	//fill the body in with posts info
        await next();
    });

    router.get("/profile/:id", async (ctx, next) => {
        ctx.status = HttpStatus.OK;
        ctx.body = await getProfileInfo(ctx.params.id);
        await next();
    });

    router.get("/log-in",async (ctx,next)=>{
    ctx.status = HttpStatus.OK;
    ctx.body = "";
    await next();
    });

    router.get("/log-in/:l/:p", async (ctx, next) => {
        const User = require('../models/user');	
        ctx.status = HttpStatus.OK;
        await User.findOne({"login": ctx.params.l, "password": ctx.params.p}, "login password" , async (err, user) => {
            ctx.body = (user != null);
        });
        await next();
    });

    router.get("/sign-up",async (ctx,next)=>{
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

    app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initRoutes;