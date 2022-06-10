// 导入 express 模板
const express = require('express')
// 创建 express 服务器实例
const app = express()


// 1. 导入自己封装的中间件模块
const customBodyparser = require('./10.custom-body-parser')
// 2. 将自定义的中间件函数， 注册为全局可用的中间件
app.use(customBodyparser)

app.post('/user', (req, res) => {
    res.send(req.body)
})


// 调用 app.listen 方法，指定端口启动 web 服务器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})