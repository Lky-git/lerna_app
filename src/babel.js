//babel.js
let arr = [1,2,3]
let res = arr.reduce((pre,old)=>{
    return pre+old
},0)
console.log(res);