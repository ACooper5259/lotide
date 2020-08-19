const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {
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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 

