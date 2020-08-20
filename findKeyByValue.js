const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function (object, value) {
  for (let element in object){
    let title = object[element]
    if (title === value){
      return element
    } 
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestPetNames = { 
  dog: "Rover",
  cat: " Simba",
  goat:  "Billy"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestPetNames, "Billy"), "goat");
assertEqual(findKeyByValue(bestPetNames, "Max"), undefined);