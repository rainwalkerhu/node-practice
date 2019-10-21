const fs = require('fs')
const path = require('path')
const Stream = require('stream');


// 什么是 Buffer

// 通常，数据的移动是为了处理或者读取它，并根据它进行决策。伴随着时间的推移，每一个过程都会有一个最小或最大数据量。
// 如果数据到达的速度比进程消耗的速度快，那么少数早到达的数据会处于等待区等候被处理。
// 反之，如果数据到达的速度比进程消耗的数据慢，那么早先到达的数据需要等待一定量的数据到达之后才能被处理。
// 这里的等待区就指的缓冲区（Buffer），它是计算机中的一个小物理单位，通常位于计算机的 RAM 中


// 最简单的buffer
const b1 = Buffer.from('10');
console.log(b1.toString())
// 指定下字符编码
const buf = Buffer.from('hello world', 'ascii');
console.log(buf.toString())

// // buffer与字符串互转
const buf_2 = Buffer.from('Node.js 技术栈', 'UTF-8');
console.log(buf_2);
console.log(buf_2.length); // 17
// 一个中文在 UTF-8 下占用 3 个字节
console.log(buf_2.toString('UTF-8', 0, 11));

