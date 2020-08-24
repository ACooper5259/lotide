const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      Steve: { grade: 68 },
      Doug: { grade: 33 },
      Jenn: { grade: 90 },
      Stephanie: { grade: 49 },
    },
    (x) => x.grade <= 50
  ),
  "Doug"
);

assertEqual(
  findKey(
    {
      Steve: { favouriteColor: "blue" },
      Doug: { favouriteColor: "red" },
      Jenn: { favouriteColor: "green" },
      Stephanie: { favouriteColor: "black" },
    },
    (x) => x.favouriteColor === "black"
  ),
  "Stephanie"
);

module.exports = findKey;
