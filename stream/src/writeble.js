const fs = require('fs')
const path = require('path')
const Stream = require('stream');

//  (echo i am; sleep 1; echo rainwalker) | node writeble.js

// const Writable = Stream.Writable;
// let ws = Writable();
// ws._write = function (chunk, enc, next) {
//     // console.dir(chunk);
//     console.log(chunk.toString())
//     next();
// };
// process.stdin.pipe(ws);


let ws2 = fs.createWriteStream('message.txt');
// ws2.write('hell world!');

setTimeout(function () {
    ws2.end('\n嘻嘻收工');
}, 5000);
process.stdin.pipe(ws2);