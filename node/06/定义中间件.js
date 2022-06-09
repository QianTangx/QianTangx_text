const express = require('express')
const app = express()

/*
// 定义一个最简单的中间件函数
const mw = (req, res, next) => {

    console.log('定义一个最简单的中间件函数')

    // 把流转关系，转交给下一个 中简件 或 路由
    next()
}
// 将 mw 注册为全局生效的中间件
app.use(mw)
*/

// 定义一个全局中间件的简化形式
app.use( (req, res, next) => {
    console.log('定义一个最简单的中间件函数')
    next()
})



app.get('/', (req, res) => {
    res.send('Home page.')
    console.log('调用了 / 这个路由')
})
app.get('/user', (req, res) => {
    res.send('User page.')
    console.log('调用了 /user 这个路由')
})


app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})