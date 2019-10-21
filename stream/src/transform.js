const fs = require('fs')
const path = require('path')
const Stream = require('stream');
const Writable = Stream.Writable
const Transform = Stream.Transform

const ws = new Writable({
  write(chunk, encoding, cb) {
    console.log(chunk)
    cb()
  }
})

const ts = new Transform({
  transform(chunk, encoding, cb) {
    console.log('reverse:', [...chunk.toString()].reverse().join(''))
  }
})
process.stdin.pipe(ts).pipe(ws)