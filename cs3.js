// let res = require('globby')
let fs = require('fs')
// console.log(res);
var writeStr = "我是写入的内容";
fs.writeFile('./demo-file/demo.md', writeStr, (error)=> {
    console.log("error:" + error);
});