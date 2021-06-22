
const time = require('./time');
const sinon = require('sinon');
sinon.stub(time, 'setTimeout');

require('../src/main-modules/db-connect')('mongodb://localhost/hobo-thoughts');	//connect to MongoDB

const api = require('../src/api/api');

test('#1 -- getPosts', async () => {
  expect(await api.getPosts()).toBeTruthy();
  expect(await api.getPosts(['lorem','ipsum'])).toBeTruthy();
  expect(await api.getPosts(['lorem','ipsum','amet'])).toStrictEqual([]);
});

test('#2 -- getProfileInfo', async () => {
  expect(await api.getProfileInfo('Fallgregg')).toBeTruthy();
  expect(await api.getProfileInfo('test01')).toBeTruthy();
  expect(await api.getProfileInfo('test10')).toStrictEqual({});
});

test('#3 -- authorize', async () => {
  expect(await api.authorize('{"login":"dimas7001","password":"dimas"}')).toBeTruthy();
  expect(await api.authorize('{"login":"test01","password":"testpass"}')).toBeTruthy();
  expect(await api.authorize('{"login":"dimas7001","password":"dimass"}')).toBeFalsy();
});
//
test('#4 -- addNewPost', async () => {
  expect(await api.addNewPost('{"author":"test02","title":"Tuna Ipsum","content":"Spookfish zebra oto pilchard porcupinefish worm eel.","tags":["tuna","ipsum","dolor"]}')).toBeTruthy();
  expect(await api.addNewPost('{"author":"test03","title":"Tuna Ipsum","content":"Spookfish zebra oto pilchard porcupinefish worm eel.","tags":["tuna","ipsum","dolor"]}')).toBeTruthy();
  expect(await api.addNewPost('{"author":"test01","title":"","content":"","tags":["tuna","ipsum","dolor"]}')).toBeFalsy();
});
//
test('#5 -- registerUser', async () => {
  expect(await api.registerUser('{"login":"momo1","password":"momo","nameSurname":"Momo Momo"}')).toBeTruthy();
  expect(await api.registerUser('{"login":"dead_i1","password":"dead","nameSurname":"Dead Inside"}')).toBeTruthy();
  expect(await api.registerUser('{"login":"test01","password":"test01","nameSurname":"Name Surname"}')).toBeFalsy();
});

test('#6 -- openPost', async () => {
  expect(await api.openPost('609309e3c310e4dfa69a6930')).toBeTruthy();
  expect(await api.openPost('609309e3c310e4dfa69a6931')).toBeTruthy();
  expect(await api.openPost('aaabbb')).toStrictEqual({});
});

test('#7 -- addNewComment', async () => {
  expect(await api.addNewComment('{"author":"test01","post_id":"60d176996302e027906fcaed","content":"test_content1"}')).toBeTruthy();
  expect(await api.addNewComment('{"author":"test02","post_id":"60d176996302e027906fcaed","content":"test_content1"}')).toBeTruthy();
  expect(await api.addNewComment('{"author":"test02","post_id":"60d176996302e027906fcaed","content":""}')).toBeFalsy();
});

test('#8 -- setLike', async () => {
  expect(await api.setLike('{"author":"test01","post_id":"609c564badf874d10da2c2d3","value":"true"}')).toBeTruthy();
  expect(await api.setLike('{"author":"test01","post_id":"609c564badf874d10da2c2d3","value":"false"}')).toBeTruthy();
  expect(await api.setLike('{"author":"test01","post_id":"609c564badf874d10da2c2d3","value":"false"}')).toBeTruthy();
});
//
test('#9 -- deleteComment', async () => {
  expect(await api.deleteComment('aaabbb')).toBeFalsy();
  expect(await api.deleteComment('60d189e99214f11cc43d7909')).toBeTruthy();
  expect(await api.deleteComment('60d189e99214f11cc43d790a')).toBeTruthy();
});

test('#10 -- showSettings', async () => {
  expect(await api.showSettings('aaabbb')).toStrictEqual({});
  expect(await api.showSettings('dimas7001')).toBeTruthy();
  expect(await api.showSettings('Fallgregg')).toBeTruthy();
});
//
test('#11 -- updateSettings', async () => {
  expect(await api.updateSettings('{"login":"test01","name_surname":"Jest Test2","avatar":"src/avatar","password":"testpass"}')).toBeTruthy();
  expect(await api.updateSettings('{"login":"test02","name_surname":"Jest Test2","avatar":"src/avatar","password":"testpass"}')).toBeTruthy();
  expect(await api.updateSettings('{"login":"test03","name_surname":"Jest Test2","avatar":"src/avatar","password":"testpass"}')).toBeTruthy();
});

test('#12 -- subscribe', async () => {
  expect(await api.subscribe('{"follower":"test01","followed":"test03"}')).toBeTruthy();
  expect(await api.subscribe('{"follower":"test01","followed":"dimas7001"}')).toBeTruthy();
  expect(await api.subscribe('{"follower":"test01","followed":""}')).toBeFalsy();
});

test('#13 -- unsubscribe', async () => {
  expect(await api.unsubscribe('{"follower":"test01","followed":"test03"}')).toBeTruthy();
  expect(await api.unsubscribe('{"follower":"test01","followed":"dimas7001"}')).toBeTruthy();
  expect(await api.unsubscribe('{"follower":"","followed":"test01"}')).toBeFalsy();
});

test('#14 -- showSubscriptions', async () => {
  expect(await api.showSubscriptions('test01')).toBeTruthy();
  expect(await api.showSubscriptions('dimas7001')).toBeTruthy();
  expect(await api.showSubscriptions('aaabbb')).toStrictEqual({follower: [], followed: []});
});
