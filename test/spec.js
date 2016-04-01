var assert = require('assert');
var convert = require('../roman_numerals');


describe('Roman Numerals Conversion', function() {
  describe('prep', function () {
    it('returns an array of values to be summed', function () {
      var input = "XIV";
      var expected = [10, 4, 0];
      assert.deepEqual(convert.convert(input), expected);
    })
  })
  describe('convert', function () {
    it('returns the numeric value of a single Roman Numeral', function () {
      var input = "V";
      var expected = 5;
      assert.equal(convert.convert(input), expected);
    });
    it('returns the sum of descending Roman Numerals', function () {
      var input = "XVI"
      var expected = 16;
      assert.equal(convert.convert(input), expected);
    })
  });
  it('returns the sum of pair of ascending Roman Numerals', function () {
    var input = "XIVX"
    var expected = 24;
    assert.equal(convert.convert(input), expected);
  })
});
