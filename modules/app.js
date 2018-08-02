console.log("...in app.js");
//var test="hello from app"; can not be accessed in find-me.js
test="hello from app";//can be accessed in find-me.js
const findMe = require('find-me');


console.log(findMe);
//console.log(require.cache);
// //cache version
// require('find-me');
//require.cache ={};
Object.keys(require.cache).forEach(item =>{
    delete require.cache[item];
});
console.log(require.cache);

// const myLib=require('my-lib');

//const os=require('os');
//console.log(os);
// const fs=require('fs');
// console.log(fs);
// const http=require('http');
// console.log(http);

// const fn=require('./functions');
// console.log(fn.add(1,9));

// const dt=require('./data');
// console.log(dt);


//node app.js -->module
//console.log(module);