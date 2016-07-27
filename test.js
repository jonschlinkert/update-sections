'use strict';

require('mocha');
var assert = require('assert');
var update = require('./');

describe('update-sections', function() {
  it('should export a function', function() {
    assert.equal(typeof update, 'function');
  });

  it('should throw an error when contents is not a string', function(cb) {
    try {
      update();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected contents to be a string');
      cb();
    }
  });

  it('should throw an error when heading is not a string', function(cb) {
    try {
      update('foo');
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected heading to be a string');
      cb();
    }
  });

  it('should throw an error when snippet is not a string', function(cb) {
    try {
      update('foo', 'bar');
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected snippet to be a string');
      cb();
    }
  });

  it('should throw an error when placement is not a string', function(cb) {
    try {
      update('foo', 'bar', 'baz');
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected placement to be a string');
      cb();
    }
  });

  it('should match headings with an `options.match` function', function() {
    var res = update('foo\n# one\nabc\n# two\nthree', 'bar', 'baz', 'after', {
      match: function(title) {
        return title === 'one';
      }
    });
    assert.equal(res, 'foo\n# one\n\nabc\n\nbaz\n\n# two\nthree');
  });

  it('should match headings with an `options.match` string', function() {
    var res = update('foo\n# one-a\nxyz\n# one\nabc\n# two\nthree', 'bar', 'baz', 'after', {
      match: 'one'
    });
    assert.equal(res, 'foo\n# one-a\nxyz\n# one\n\nabc\n\nbaz\n\n# two\nthree');
  });

  it('should match headings with an `options.match` regex', function() {
    var res = update('foo\n# one-a\nxyz\n# one\nabc\n# two\nthree', 'bar', 'baz', 'after', {
      match: /one$/
    });
    assert.equal(res, 'foo\n# one-a\nxyz\n# one\n\nabc\n\nbaz\n\n# two\nthree');
  });
});
