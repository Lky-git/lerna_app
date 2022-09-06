"use strict";

//babel.js
var arr = [1, 2, 3];
var res = arr.reduce(function (pre, old) {
  return pre + old;
}, 0);
console.log(res);