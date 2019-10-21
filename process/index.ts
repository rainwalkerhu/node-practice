import { createServer } from 'http';

const server = createServer();
server.listen(3000, () => {
  process.title = '胡晶创建的process';
  console.log(process.pid, process.title);
})