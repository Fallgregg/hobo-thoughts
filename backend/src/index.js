
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

const app = new Koa();

require('./blocks/db-connect')();	//connect to MongoDB

const PORT = process.env.PORT || 3000;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

require('./blocks/routes')(app);

app.listen(PORT, function () {
    console.log("==> To see an app visit http://localhost:%s/", PORT);
});