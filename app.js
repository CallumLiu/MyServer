//1. 导入 express
const express = require('express');

//2. 创建应用对象
const app = express();

//配置跨域
const cors = require('cors')
app.use(cors())

//导入注册用户路由模块 
// const userRouter = require('./router/user')
// app.use('/api', userRouter)

//3. 创建路由规则
// app.get('/home', (req, res) => {
//   res.end('hello express server');
// });

app.use(express.static('public'))

const port = 80;
//4. 监听端口 启动服务
app.listen(80, () =>{
  console.log(`服务已经启动, 端口监听为${port}...`);
  console.log(`Server runing at http://localhost:${port}/`);
});
