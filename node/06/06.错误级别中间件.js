// 导入 express 模板
const express = require('express')
// 创建 express 服务器实例
const app = express()

// 定义路由
app.get('/', (req, res) => {
    throw new Error('服务器内部发送了错误！')
    res.send('Home page.')
})

// 定义错误级别 的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
// 必须放在 路由之后
app.use((err, req, res, next) => {
    console.log('发生了错误！' + err.message)
    res.send('Error:' + err.message)
})

app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})