const assertArrayEqual = require("./assertArrayEqual");

const words = ["ground", "control", "to", "major", "tom"];
const nums = [56, 78, 3, -2, 90, 20];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(nums, (num) => num * 10);
assertArrayEqual(results2, [560, 780, 30, -20, 900, 200]);

const results3 = map(nums, (num) => num > 20);
assertArrayEqual(results3, [true, true, false, false, true, false]);

const results4 = map(words, (word) => word.length);
assertArrayEqual(results4, [6, 7, 2, 5, 3]);

module.exports = map;
