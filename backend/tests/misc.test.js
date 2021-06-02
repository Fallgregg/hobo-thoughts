
const time = require('./time');
const sinon = require('sinon');
sinon.stub(time, 'setTimeout');

const addNewPost = require('./add-post');

test('add-post test #1', async () => {
  expect(await addNewPost(
    "dimas7001", 
    "such a beautiful day"
  )).toBeFalsy();
});

test('add-post test #2', async () => {
  expect(await addNewPost(
    "dimas7001", 
    "such a beautiful day",
    "such a beautiful daysuch a beautiful daysuch a beautiful daysuch a beautiful daysuch a beautiful day"
  )).toBeTruthy();
});

test('add-post test #3', async () => {
  expect(await addNewPost(
    "Fallgregg", 
    "Monkeyface prickleback",
    "Monkeyface prickleback, tadpole fish sandfish piranha gibberfish amur pike galjoen fish false cat shark"
  )).toBeTruthy();
});

/*const checkData = require('./authorize');

test('authorizing test #1', async () => {
  expect(await checkData("dimas7001", "dimas")).toBeTruthy();
  expect(await checkData("dimas700", "dimas")).toBeFalsy();
});

test('authorizing test #2', async () => {
  expect(await checkData("_lil.pri_", "lilpri67")).toBeTruthy();
  expect(await checkData("lilpri67", "lilpri67")).toBeFalsy();
});

test('authorizing test #3', async () => {
  expect(await checkData("Fallgregg", "fallgregg")).toBeTruthy();
  expect(await checkData("fallgregg", "fallgreg")).toBeFalsy();
});

test('authorizing test #4', async () => {
  expect(await checkData("Sasuke_Uchiha", "sasukeuchiha")).toBeTruthy();
  expect(await checkData("SasukeUchiha", "sasukeuchiha")).toBeFalsy();
});

test('authorizing test #5', async () => {
  expect(await checkData("Sasuke_Uchiha", "sasukeuchih")).toBeTruthy();
  expect(await checkData("SasukeUchiha", "sasukeuchiha")).toBeFalsy();
});*/