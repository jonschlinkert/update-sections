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
});
