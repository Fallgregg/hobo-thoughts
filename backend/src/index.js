
const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require('koa-cors');
const HttpStatus = require("http-status");

const app = new Koa();

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


const posts = [
  {
    title: "Post Title 1",
    text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
    likes: 100,
  },{
    title: "Post Title 2",
    text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
    likes: 101,
  },{
    title: "Post Title 3",
    text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
    likes: 102,
  },
];

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
};