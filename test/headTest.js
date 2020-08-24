// test head.js

const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE
//const actual = head([5,6,7])
//const expected = 5

//assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([5]), 6)
assertEqual(head(["h"]), 89);
assertEqual(head(["5"]), "5");
