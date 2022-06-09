// 导入 express
const express = require('express')

// 创建 web 服务器，命名为 app
const app = express()

// 监听客户端的 GET 和 POST 请求，并向客户端相应具体的内容
// app.get() 参数1：客户端请求的 URL 地址
//           参数2：请求相应的处理函数
//           req：请求对象 （包含了与请求相关的属性和方法
//           res: 响应对象 （包含了与响应相关的属性和方法
app.get('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send({name: '浅塘x', age:20, gender: '男'})
})

app.post('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串该
    res.send('请求成功')
})

app.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送哦过来的 查询参数
    // 注意： 默认情况下 req.query 是一个空对象
    console.log(req.query)
    res.send(req.query)
})

// req.params： URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
// 注意：这里的 :id 是一个动态的参数
// app.get('/user/:id', (req, res) => {
app.get('/user/:id/:name', (req, res) => {
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
})

// 启动 web 服务器
app.listen(80, ()=>{
    console.log('express server runing at http://127.0.0.1')
})