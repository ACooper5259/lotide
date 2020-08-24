const eqArrays = require("./eqArrays");

const assertArrayEqual = function (array1, array2) {
  eqArrays(array1, array2)
    ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

module.exports = assertArrayEqual;
