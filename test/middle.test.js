const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [5, '7'] when called with [1, 1, 5, '7', 98, 3]", () => {
    const actual = middle([1, 1, 5, "7", 98, 3]);
    const expected = [5, "7"];
    assert.deepEqual(actual, expected);
  });
  it("returns [7] when called with [1, 5, 7, '57', '0']", () => {
    const actual = middle([1, 1, 5, "7", 98, 3]);
    const expected = [5, "7"];
    assert.deepEqual(actual, expected);
  });
  it("returns ['morning', 'Victoria'] when called with ['Good', 'morning', 'Victoria', 'bootcampers']", () => {
    const actual = middle(["Good", "morning", "Victoria", "bootcampers"]);
    const expected = ["morning", "Victoria"];
    assert.deepEqual(actual, expected);
  });
  it("returns [] when called with ['Good', 'morning']", () => {
    const actual = middle(["Good", "morning"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
