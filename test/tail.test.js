const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns ['Lighthouse','Labs'] when called on ['Hello', 'Lighthouse', 'Labs']", () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });

  it("returns ['successful',2, 'test'] when called on [1,'successful',2, 'test']", () => {
    const actual = tail([1, "successful", 2, "test"]);
    const expected = ["successful", 2, "test"];
    assert.deepEqual(actual, expected);
  });
});
