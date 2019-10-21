const fs = require('fs')
const path = require('path')
const Stream = require('stream');

// 消耗一个readable流，详细说明流的消耗过程
process.stdin.on('readable', function () {
  var buf = process.stdin.read(3);
  console.log(buf);
  // console.log(buf.toString());
  process.stdin.read(0);
});
// (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node readable.js