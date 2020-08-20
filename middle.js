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

const middle = function(array) {
  let resultArray = [];
  if (array.length <= 2) {
    return resultArray;
  } else {
    if ((array.length % 2) !== 0) {
      resultArray.push(array[(array.length - 1) / 2]);
    } else {
      resultArray.push(array[(array.length / 2) - 1]);
      resultArray.push(array[array.length / 2]);
    }
    return resultArray;
  }
};

assertArrayEqual(middle([1, 1, 5, '7', 98, 3]),[5,'7']);
assertArrayEqual(middle([1, 5, 7, '57', '0']),[7]);
assertArrayEqual(middle(['Good', 'morning', 'Victoria', 'bootcampers']),['morning', 'Victoria']);
assertArrayEqual(middle(['Good', 'morning', 'Victoria', 'Lighthouse','bootcampers']),['Victoria']);
assertArrayEqual(middle(['Good', 'morning']),[]);