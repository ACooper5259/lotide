const middle = require("../middle");
const assertArrayEqual = require("../assertArrayEqual");

assertArrayEqual(middle([1, 1, 5, "7", 98, 3]), [5, "7"]);
assertArrayEqual(middle([1, 5, 7, "57", "0"]), [7]);
assertArrayEqual(middle(["Good", "morning", "Victoria", "bootcampers"]), [
  "morning",
  "Victoria",
]);
assertArrayEqual(
  middle(["Good", "morning", "Victoria", "Lighthouse", "bootcampers"]),
  ["Victoria"]
);
assertArrayEqual(middle(["Good", "morning"]), []);
