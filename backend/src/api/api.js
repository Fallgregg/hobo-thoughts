'use strict';

const getPosts = require('./data-access/blocks/get-posts');
const getProfileInfo = require('./data-access/blocks/get-profile-info');
const authorize = require('./data-access/blocks/authorize');
const addNewPost = require('./data-access/blocks/add-post');
const registerUser = require('./data-access/blocks/register');
const openPost = require('./data-access/blocks/open-post');
const addNewComment = require('./data-access/blocks/add-comment');
const setLike = require('./data-access/blocks/set-like');
const deleteComment = require('./data-access/blocks/delete-comment');

const { log } = require('../utils/utils'); //logger import

const messages = {
    authorization: [
        'Starting authorization process',
        'start:authorization'
    ],
    singUp: [
        'Starting sign-up process',
        'start:sign-up'
    ],
    posting: [
        'Starting posting process',
        'start:posting'
    ],
    getPosts: [
        'Starting get posts process',
        'start:get-posts'
    ],
    getProfInf: [
        'Starting get profile info process',
        'start:get-prof-info'
    ],
    openPost: [
        'Starting post opening process',
        'start:post-open'
    ],
    addComment: [
        'Starting new comment creating process',
        'start:add-comment'
    ],
    setLikeOrDislike: [
        'Starting a like/dislike setting process',
        'start:set-like'
    ],
    deleteComment: [
        'Starting comment delete process',
        'start:delete-comment'
    ],
}

const loggingWrapper = (fn, logOption) => (...args) => {
    const forLog = messages[logOption];

    !!forLog ? 
        log(forLog[0], forLog[1])
    :
        log('Starting module', fn.name)

    return fn(...args);
};

module.exports = {
    getPosts: loggingWrapper(getPosts, 'getPosts'),
    getProfileInfo: loggingWrapper(getProfileInfo, 'getProfInf'),
    authorize: loggingWrapper(authorize, 'authorization'),
    addNewPost: loggingWrapper(addNewPost, 'posting'),
    registerUser: loggingWrapper(registerUser, 'singUp'),
    openPost: loggingWrapper(openPost, 'openPost'),
    addNewComment: loggingWrapper(addNewComment, 'addComment'),
    setLike: loggingWrapper(setLike, 'setLikeOrDislike'),
    deleteComment: loggingWrapper(deleteComment, 'deleteComment'),
};
