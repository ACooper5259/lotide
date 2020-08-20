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

const assertArrayEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

const words = ["ground", "control", "to", "major", "tom"];
const nums = [56, 78, 3, -2, 90, 20];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);
assertArrayEqual(results1,['g','c','t','m','t']);

const results2 = map(nums, num => num * 10);
assertArrayEqual(results2,[560, 780, 30, -20, 900, 200]);

const results3 = map(nums, num => num > 20);
assertArrayEqual(results3,[true, true, false, false, true, false]);

const results4 = map(words, word => word.length);
assertArrayEqual(results4,[6, 7, 2, 5, 3]);