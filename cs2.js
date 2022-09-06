var babel = require('babel-core');
var fs = require('fs');
babel.transformFile("./babel/babel.js", function (err, res) {
    console.log(res);
})