'use strict';

const pkgLky = require('..');
const assert = require('assert').strict;

assert.strictEqual(pkgLky(), 'Hello from pkgLky');
console.info("pkgLky tests passed");
