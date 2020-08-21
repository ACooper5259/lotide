const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }
  return result;
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

const assertArrayEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArrayEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);*/
assertArrayEqual(results2, ["I've", 'been', 'to', 'Hollywood' ]);