const assertArrayEqual = require("./assertArrayEqual");


const assertArrayEqual = function (array1, array2) {
  eqArrays(array1, array2)
    ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};*/

const without = function (source, itemsToRemove) {
  let resultArray = [];
  for (let x = 0; x < itemsToRemove.length; x++) {
    if (source[x] !== itemsToRemove[x]) {
      resultArray.push(source[x]);
    }
  }
  return resultArray;
};

assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArrayEqual(without(["Hello", "World"], ["world"]), ["Hello"]);

module.exports = without;
