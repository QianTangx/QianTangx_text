// 1. 引入 express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由规则
app.get('/server', (req, res) => {

    // 设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Orign', '*')

    // 设置响应体
    res.send('Hello AJAX')
}) 


// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动, 8000端口监听中...')
})