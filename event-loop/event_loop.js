var fs = require('fs')

// console.time('file')
// console.time('timeout3')
fs.readFile(__dirname + '/滴滴电子发票.pdf', () => {
  // console.timeEnd('file')
  console.log('readFile-callback')
})

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
  
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout0')
}, 0)
setTimeout(function () {
  // console.timeEnd('timeout3')
  console.log('setTimeout3')
}, 3)
setImmediate(() => {
  console.log('setImmediate')
});
process.nextTick(() => console.log('nextTick'));
async1();
new Promise(function (resolve) {
  console.log('promise1')
  resolve();
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})
console.log('script end')