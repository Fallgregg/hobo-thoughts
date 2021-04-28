
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
  let bodyContent = "";
  for (let i = 0; i < posts.length; i++) {
    bodyContent += `
    <h3>${posts[i].title}</h3>
    <p>${posts[i].text}</p>
    <span>${posts[i].likes}</span>
    <br><br>
  `;
  }

  ctx.status = HttpStatus.OK;
  ctx.body = bodyContent;

  delete bodyContent;
  
  await next();
});

router.get("/profile",async (ctx,next)=>{
  let bodyContent = `
    <h1>${profile.login}</h1>
    <div>
      <span>Following: ${profile.following}</span>
      <span>Followers: ${profile.followers}</span>
    </div>
    <br><br>
  `;
  for (let i = 0; i < profile.posts.length; i++) {
    bodyContent += `
    <h3>${profile.posts[i].title}</h3>
    <p>${profile.posts[i].text}</p>
    <span>${profile.posts[i].date}</span>
    <br><br>
  `;
  }

  ctx.status = HttpStatus.OK;
  ctx.body = bodyContent;

  delete bodyContent;

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