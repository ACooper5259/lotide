// index.js
const head = require("./head"); // import the function
const tail = require("./tail");
const middle = require("./middle");
const assertArrayEqual = require("./assertArrayEqual");
const assertEqual = require("./assertEqual");
const assertObjectEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

// create the module.exports object that will contain the functions
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
};
