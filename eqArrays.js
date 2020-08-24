const eqArrays = function (array1, array2) {
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

module.exports = eqArrays;
