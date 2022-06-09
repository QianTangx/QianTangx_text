const express = require('express')
const app = express()

// 定义一个全局中间件的简化形式
app.use( (req, res, next) => {
    // 获取到请求到达服务器的时间
    var time = Date.now()
    // 为 req 对象，挂载自定义的属性，从而把时间共享给后面的所有路由
    req.starTime = time
    console.log('调用了第一个全局中间件')
    next()
})
// 定义第二个全局中简件
app.use( (req, res, next) => {
    // 获取到请求到达服务器的时间
    console.log('调用了第二个全局中间件')
    next()
})


app.get('/', (req, res) => {
    // const time = Date.now()
    res.send('Home page.' + req.starTime)
})
app.get('/user', (req, res) => {
    // const time = Date.now()
    res.send('User page.' + req.starTime)
})


app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})