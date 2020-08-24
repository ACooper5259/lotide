// index.js
const head = require("./head"); // import the function
const tail = require("./tail");
const middle = require("./middle");

// create the module.exports object that will contain the functions
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
};
