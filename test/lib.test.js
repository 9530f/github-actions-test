const assert = require('assert');
const lib = require('../');

assert.strictEqual(lib.add(1, 2), 3);
assert.strictEqual(lib.add(5, 5), 10);
console.log('All tests passed!');