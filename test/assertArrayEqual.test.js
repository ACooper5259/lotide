const assertArrayEqual = require("../assertArrayEqual");

assertArrayEqual([1, "labs"], [1, "labs"]);
assertArrayEqual([1, "lighthouse"], [1, "labs"]);
assertArrayEqual(["1", "labs"], [1, "labs"]);
assertArrayEqual([undefined, "labs"], [1, "labs"]);
assertArrayEqual(["labs", 1], [1, "labs"]);
