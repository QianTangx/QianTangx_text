// 1. 引入 express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由规则
// 发送 get 请求，且路径是 /server 执行
app.get('/server', (req, res) => {

    // 设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    res.send('Hello AJAX GET')
}) 

// all 可以接受任意类型的请求
app.all('/server', (req, res) => {

    // 设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 自定义响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    res.send('Hello AJAX POST')
}) 

app.all('/json-server', (req, res) => {

    // 设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 自定义响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    // 相应一个数据
    const data = {
        name: 'QianTangx'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    res.send(str)
}) 


// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动, 8000端口监听中...')
})