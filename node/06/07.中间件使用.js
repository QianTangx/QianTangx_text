// 导入 express 模板
const express = require('express')
// 创建 express 服务器实例
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之间进行配置
// 通过 express.json() 这个中间件 解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url.encoded 格式的数据
// app.use(express.urlencoded({extended: false}))

// 第三方：1. 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
//        2. 使用 app.use() 注册中间件
app.use(parser.urlencoded({extended: false})) // ==  app.use(express.urlencoded({extended: false}))


app.post('/user', (req, res) => {
    // 在服务器，可以使用 req.boby 这个属性，来接受客户端发送的请求数据
    // 在默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器端， 可以通过 req.boby 来获取 JSON 格式的表单数据和 url-encoded 格式的数据 
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})