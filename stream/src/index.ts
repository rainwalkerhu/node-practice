import { createServer } from 'http';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';

const server = createServer((req, res) => {
  const method = req.method;
  if(method === 'GET') {
    const file = resolve(__dirname, 'data.txt')
    console.log(file)
    // readFile(file, function(err, data) {
    //   console.log(data.toString())
    //   res.end(data)
    // })
    // 两个文件名
    const fileName1 = resolve(__dirname, 'data.txt')
    const fileName2 = resolve(__dirname, 'data-bak.txt')
    // 读取文件的 stream 对象
    const readStream = createReadStream(fileName1)
    // 写入文件的 stream 对象
    const writeStream = createWriteStream(fileName2)
    // 通过 pipe执行拷贝，数据流转
    readStream.pipe(writeStream)
    readStream.pipe(res)
    // 数据读取完成监听，即拷贝完成
    readStream.on('end', function () {

        console.log('拷贝完成')
    })
  }
})
server.listen(8000)