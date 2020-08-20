const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1)
  let object2Keys = Object.keys(object2)
  if (object2Keys.length !== object1Keys.length) {
    return false;
  } else {
    for (let element in object1) {
      console.log(object1[element])
      if (object1[element] === object2[element]){
        return true
      } else {
        return false
      }
    }
  }
 

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false