const {add, sub} = require('../src/app.js');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
});
