const test = require('tape');
const addNumbers = require('./addnumbers.js');

//TEST WORK
test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

//2 +2 = 4
test('2 + 2 = 4', function (t) {
  t.equal(addNumbers(2, 2), 4);
  t.end();
});

//2 +12 = 24
test('2 + 2 = 4', function (t) {
  t.notEqual(addNumbers(2, 12), 24);
  t.end();
});

//a + 2
test('string and number', function (t) {
  t.equal(addNumbers("a", 2), "some data is not number");
  t.end();
});
// 4 + a
test('string and number', function (t) {
  t.equal(addNumbers(4,'a'), "some data is not number");
  t.end();
});
