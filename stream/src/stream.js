
const fs = require('fs')
const path = require('path')
const Stream = require('stream');

// buffer 被stream作为底层依赖进行包装，提供友好的api, 例如，HTTP请求和process.stdout都是流的实例
// 在node中，一共有五种类型的流：readable,writable,transform,duplex以及"classic"，主讲readable,writable,
// 无论哪一种流，都会使用.pipe()方法来实现输入和输出。
// pipe方法,流动的方向必须是readable--->writable

const Readable = Stream.Readable;
let rs = Readable();
let c = 97 - 1;
rs._read = function () {
  console.log(c, 'z'.charCodeAt(0))
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);
    setTimeout(function () {
      // 将 Unicode 编码转为一个字符:
      // var n = String.fromCharCode(65); // A
        rs.push(String.fromCharCode(++c));
    }, 100);
};
const Writable = Stream.Writable;
let ws = Writable();
ws._write = function (chunk, enc, next) {
    // console.dir(chunk);
    console.log(chunk.toString())
    next();
};

// rs.pipe(ws);

rs.pipe(process.stdout);
process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);

// a-z 97-122