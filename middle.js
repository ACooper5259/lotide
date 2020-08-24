const middle = function (array) {
  let resultArray = [];
  if (array.length <= 2) {
    return resultArray;
  } else {
    if (array.length % 2 !== 0) {
      resultArray.push(array[(array.length - 1) / 2]);
    } else {
      resultArray.push(array[array.length / 2 - 1]);
      resultArray.push(array[array.length / 2]);
    }
    return resultArray;
  }
};

module.exports = middle;
