// 导入 express 模板
const express = require('express')
// 创建 express 服务器实例
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')


// 这是解析表单数据的中间件
app.use((req, res, next) => {
    // 1. 定义中间件具体的业务逻辑
    let str = ''
    // 2. 监听 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })
    // 3. 监听 req 的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的请求数据
        console.log(str)
        //TODO：把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})


// 调用 app.listen 方法，指定端口启动 web 服务器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})