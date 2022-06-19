// 1. 引入 express
const express = require('express')

// 2. 创建应用对象
const app = express()

app.get('/home', (req, res) => {
    // 相应一个页面
    res.sendFile(__dirname + '/index.html')
})

app.get('/data', (request, response) => {
    response.send('用户数据')
})

app.listen(9000, () => {
    console.log('服务器已启动...')
})