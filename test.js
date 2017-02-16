var test = require('tape');
var addNumbers = require('./addnumbers.js');

//TEST WORK
test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

//2 +2 = 4
test('2 + 2 = 4', function (t) {
  t.equal(addNumbers(2,2), 4);
  t.end();
})
