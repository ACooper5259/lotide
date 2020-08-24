const assertEqual = require("./assertEqual");

const countLetters = function (sentence) {
  const result = {};
  for (let char of sentence) {
    if (char !== " ") {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
};

const result1 = countLetters("Lighthouse Labs");

assertEqual(result1["L"], 2);
assertEqual(result1["l"], undefined);
assertEqual(result1["s"], 2);
assertEqual(result1["b"], 1);

module.exports = countLetters;
