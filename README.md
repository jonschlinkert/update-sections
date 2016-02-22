# update-sections [![NPM version](https://img.shields.io/npm/v/update-sections.svg)](https://www.npmjs.com/package/update-sections) [![Build Status](https://img.shields.io/travis/jonschlinkert/update-sections.svg)](https://travis-ci.org/jonschlinkert/update-sections)

> Easily prepend, append, inject or replace 'sections' in a markdown string.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i update-sections --save
```

## Usage

```js
var fs = require('fs');
var update = require('update-sections');
var readme = fs.readFileSync('README.md', 'utf8');
var snippet = fs.readFileSync('contributing.md', 'utf8');

// Inject the `contributing.md` string before the "License" section
var str = update(readme, 'License', snippet, 'before');
```

## API

### [update](index.js#L32)

Re-write a layout with "sections" defined in a declarative configuration. The `sections` property must be an array of section object, and each object  must have all params defined: `contents`, `heading` and `placement`.

Supported `placement` values are:

* `inner` (or aliases: `inside` and `between`): inject the content directly after the heading, before the content of a section
* `before` (or alias `prepend`): inject the content before the specified section's heading
* `after` (or alias `append`): inject the content after the specified section's heading

**Params**

* `contents` **{String}**: the string with sections to update
* `heading` **{String}**: the heading of the existing section to match for placement
* `value` **{String}**: the "snippet" to inject for the section
* `placement` **{String}**: where to place the new content, relative to the specified heading.
* `returns` **{String}**

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/update-sections/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm i -d && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT license](https://github.com/jonschlinkert/update-sections/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on February 21, 2016._