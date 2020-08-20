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

const assertArrayEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};


const letterPositions = function (sentence) {
  let result = {}
  for ( let x = 0; x < sentence.length; x++) {
    let letter = sentence[x]
    if (result[letter]) {
      result[letter].push(x)
    }
    else {
      result[letter] = [x]
    }
  }
  return result;
}


assertArrayEqual(letterPositions("hello").h, [0])
assertArrayEqual(letterPositions("hello").e, [1])
assertArrayEqual(letterPositions("hello").l, [2,3])
assertArrayEqual(letterPositions("hello").o, [4])

console.log(letterPositions('hello'))