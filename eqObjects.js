const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object2Keys.length !== object1Keys.length) {
    return false;
  } else {
    for (let element of object1Keys) {
      if (Array.isArray(object1[element])) {
        return eqArrays(object1[element], object2[element]);
      } else {
        if (!(object1[element] === object2[element])) {
          return false;
        }
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;
