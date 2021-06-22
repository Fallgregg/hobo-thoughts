'use strict';

const getPosts          = require('./data-access/blocks/get-posts');
const getProfileInfo    = require('./data-access/blocks/get-profile-info');
const authorize         = require('./data-access/blocks/authorize');
const addNewPost        = require('./data-access/blocks/add-post');
const registerUser      = require('./data-access/blocks/register');
const openPost          = require('./data-access/blocks/open-post');
const addNewComment     = require('./data-access/blocks/add-comment');
const setLike           = require('./data-access/blocks/set-like');
const deleteComment     = require('./data-access/blocks/delete-comment');
const showSettings      = require('./data-access/blocks/show-settings');
const updateSettings    = require('./data-access/blocks/update-settings');
const subscribe         = require('./data-access/blocks/subscribe');
const unsubscribe       = require('./data-access/blocks/unsubscribe');
const showSubscriptions = require('./data-access/blocks/show-subscriptions');

const { log } = require('../utils/utils'); //logger import

const messages = {
    authorization: [
        'Starting authorization process',
        'start:authorization'
    ],
    registration: [
        'Starting registration process',
        'start:registration'
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
    showSettings: [
        'Starting settings show process',
        'start:show-settings'
    ],
    updateSettings: [
        'Starting settings update process',
        'start:update-settings'
    ],
    subscribe: [
        'Starting subscribing process',
        'start:subscribe'
    ],
    unsubscribe: [
        'Starting unsubscribing process',
        'start:unsubscribe'
    ],
    showSubscriptions: [
        'Starting subscriptions show process',
        'start:show-subscription'
    ],
}

const loggingWrapper = (fn, logOption) => (...args) => {
    const forLog = messages[logOption];

    !!forLog ? 
        log(forLog[0], forLog[1])
    :
        log('Starting process', fn.name)

    return fn(...args);
};

module.exports = {
    getPosts:           loggingWrapper(getPosts, 'getPosts'),
    getProfileInfo:     loggingWrapper(getProfileInfo, 'getProfInf'),
    authorize:          loggingWrapper(authorize, 'authorization'),
    addNewPost:         loggingWrapper(addNewPost, 'posting'),
    registerUser:       loggingWrapper(registerUser, 'registration'),
    openPost:           loggingWrapper(openPost, 'openPost'),
    addNewComment:      loggingWrapper(addNewComment, 'addComment'),
    setLike:            loggingWrapper(setLike, 'setLikeOrDislike'),
    deleteComment:      loggingWrapper(deleteComment, 'deleteComment'),
    showSettings:       loggingWrapper(showSettings, 'showSettings'),
    updateSettings:     loggingWrapper(updateSettings, 'updateSettings'),
    subscribe:          loggingWrapper(subscribe, 'subscribe'),
    unsubscribe:        loggingWrapper(unsubscribe, 'unsubscribe'),
    showSubscriptions:  loggingWrapper(showSubscriptions, 'showSubscriptions'),
};
