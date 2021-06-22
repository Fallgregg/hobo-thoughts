'use strict';

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

require('./main-modules/db-connect')(process.env.MONGOSERV || 'mongodb://localhost/hobo-thoughts');	//connect to MongoDB

require('./main-modules/app')(process.env.PORT);    //start app
