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
    for (let element of object1Keys) {
      if (Array.isArray(object1[element])){
        return eqArrays(object1[element],object2[element])
      }
      else {
        if (!(object1[element] === object2[element])){
          return false
        }
      }
    }
    return true
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length){
    return false;
  } else {
    let finalArray = []
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]){
        finalArray.push(array1[x])
      }
    }
  
    if (finalArray.length === array1.length){
      return true;
    } else {
      return false
    }
  }  
}



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
