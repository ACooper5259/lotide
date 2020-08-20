const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object2Keys.length !== object1Keys.length) {
    return false;
  } else {
    for (let element of object1Keys) {
      if (Array.isArray(object1[element])) {
        return eqArrays(object1[element],object2[element]);
      } else {
        if (!(object1[element] === object2[element])) {
          return false;
        }
      }
    }
    return true;
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let finalArray = [];
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        finalArray.push(array1[x]);
      }
    }
  
    if (finalArray.length === array1.length) {
      return true;
    } else {
      return false;
    }
  }
};


const assertObjectEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  eqObjects(object1, object2) ? console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

assertObjectEqual({ a: "1", b: "2" },{ b: "2", a: "1" });
assertObjectEqual({ a: "1", b: "2" },{ a: "1", b: "2", c: "3" });
assertObjectEqual({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" });
assertObjectEqual({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4]});