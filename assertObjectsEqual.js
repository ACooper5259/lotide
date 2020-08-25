const eqObjects = require("./eqObjects");

const assertObjectEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  eqObjects(object1, object2)
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
      )
    : console.log(
        `❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
      );
};

assertObjectEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
assertObjectEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });

module.exports = assertObjectEqual;
