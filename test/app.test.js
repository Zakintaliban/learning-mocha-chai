const assert = require("chai").assert;
// import assert

const { testing } = require("../app");
const { bio } = require("../app");
const nambah = require("../app").nambah;
// import the file that need to be test

// describe("App", () => {
//   describe() is simply a way to group our tests in Mocha.
//   We can nest our tests in groups as deep as we deem necessary.
//   describe() takes two arguments, the first is the name of the test group, and the second is a callback function.
//   it("app should return 'OK'", () => {
//     it() is used for an individual test case.
//     it() should be written as if you were saying it out loud:
//     “It should equal zero”, “It should log the user in”, etc.
//     it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test:
//     assert.equal(app(), "OK");
//     There are a number of different assertion tests included with assert.
//     The one we’ve already used is assert.equal(actual, expected);
//     This tests equality between our actual and expected parameters using double equals (==).
//   });
// });

describe("coba aja", () => {
  it("coba aja should return 'OK'", () => {
    assert.equal(testing(), "OK");
  });
  it("coba aja should type string", () => {
    let result = bio("zakin");
    assert.typeOf(result, "string");
  });
  it("coba aja should return more than 5", () => {
    let result = nambah(5, 5);
    assert.isAbove(result, 5);
  });
});
