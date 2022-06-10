// 导入 express 模板
const express = require('express')
// 创建 express 服务器实例
const app = express()


// 定义局部中间件
const mw1 = (req, res, next) => {
    console.log('调用了1局部生效的中间件')
    next()
}
const mw2 = (req, res, next) => {
    console.log('调用了2局部生效的中间件')
    next()
}
const mw3 = (req, res, next) => {
    console.log('调用了3局部生效的中间件')
    next()
}

// 创建路由
app.get('/', mw1, mw3, (req, res) => {
    res.send('Home page.')
})
app.get('/user', (req, res) => {
    res.send('User page.')
})


// 调用 app.listen 方法，指定端口启动 web 服务器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})