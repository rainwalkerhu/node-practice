
const fs = require('fs')
const path = require('path')
const Stream = require('stream');

const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1)
readStream.on('data', function (chunk) {
  console.log(chunk.toString())
});
// 写入文件的 stream 对象
const writeStream = fs.createWriteStream(fileName2)
// 通过 pipe执行拷贝，数据流转
// console.log(readStream)
readStream.pipe(writeStream)
