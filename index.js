/*!
 * update-sections (https://github.com/jonschlinkert/update-sections)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var sections = require('sections');

/**
 * Re-write a layout with "sections" defined in a declarative configuration.
 * The `sections` property must be an array of section object, and each object
 *  must have all params defined: `contents`, `heading` and `placement`.
 *
 * Supported `placement` values are:
 *
 * - `inner` (or aliases: `inside` and `between`): inject the content directly after the heading, before the content of a section
 * - `before` (or alias `prepend`): inject the content before the specified section's heading
 * - `after` (or alias `append`): inject the content after the specified section's heading
 *
 * @param {String} `contents` the string with sections to update
 * @param {String} `heading` the heading of the existing section to match for placement
 * @param {String} `value` the "snippet" to inject for the section
 * @param {String} `placement` where to place the new content, relative to the specified heading.
 * @return {String}
 * @api public
 */

module.exports = function update(contents, heading, snippet, placement) {
  assert.equal(typeof contents, 'string', 'expected contents to be a string');
  assert.equal(typeof heading, 'string', 'expected heading to be a string');
  assert.equal(typeof snippet, 'string', 'expected snippet to be a string');
  assert.equal(typeof placement, 'string', 'expected placement to be a string');

  return sections.format(contents, function(section) {
    var emit = sections.emit;
    var content = '';

    switch (match(heading, section.title, placement)) {
      case 'inner':
      case 'inside':
      case 'between':
        content = emit(section.heading);
        content += emit(snippet.trim());
        content += emit(section.body);
        return content;
      case 'before':
      case 'prepend':
        content = emit(snippet.trim());
        content += emit(section.heading);
        content += emit(section.body);
        return content;
      case 'after':
      case 'append':
        content = emit(section.heading);
        content += emit(section.body);
        content += emit(snippet.trim());
        return content;
      case 'replace':
        return emit(snippet.trim());
      default: {
        return section.string;
      }
    }
  });
}

function match(title, heading, placement) {
  var re = new RegExp(title, 'i');
  if (re.test(heading)) {
    return placement;
  }
}
