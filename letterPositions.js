const assertArrayEqual = require("./assertArrayEqual");

const letterPositions = function (sentence) {
  let result = {};
  for (let x = 0; x < sentence.length; x++) {
    let letter = sentence[x];
    if (result[letter]) {
      result[letter].push(x);
    } else {
      result[letter] = [x];
    }
  }
  return result;
};

assertArrayEqual(letterPositions("hello").h, [0]);
assertArrayEqual(letterPositions("hello").e, [1]);
assertArrayEqual(letterPositions("hello").l, [2, 3]);
assertArrayEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;
