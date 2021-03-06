# LEARNING MOCHA-CHAI

## INSTALLATION

open your terminal/cmd/powershell and type:

```zsh
yarn init -y

yarn add -D mocha chai
```

now open `package.json` and edit it like this:

```json
13 lines (13 sloc)  201 Bytes
  
{
  "name": "mocha-chai",
  "version": "1.0.0",
  "main": "app.js",
  "license": "MIT",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "chai": "^4.3.0",
    "mocha": "^8.3.0"
  }
}
```

next we create a file for the app and folder for the test

```zsh
touch app.js
# to create app
mkdir test
# it's default for mocha and chai to be put in "test" folder"
cd test
touch app.test.js
# to test the app
```

in `app.js` code this:

```js
let testing = () => {
  return "OK";
};

let bio = (nama) => {
  return `hello ${nama}`;
};

let nambah = (angka1, angka2) => {
  return angka1 + angka2;
};

module.exports = { testing, bio, nambah };
```

in `app.test.js`, code this:

```js
const assert = require("chai").assert;
// import assert

const { testing } = require("../app");
const { bio } = require("../app");
const nambah = require("../app").nambah; // another way to import it
// import the file that need to be test

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
```

describe() is simply a way to group our tests in Mocha.
We can nest our tests in groups as deep as we deem necessary.
describe() takes two arguments, the first is the name of the test group, and the second is a callback function.

it() is used for an individual test case.
it() should be written as if you were saying it out loud:
“It should equal zero”, “It should log the user in”, etc.
it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test:

There are a number of different assertion tests included with assert.
The one we’ve already used is assert.equal(actual, expected);
This tests equality between our actual and expected parameters using double equals (==).

### that's all folks
