// 导入 http 模块
const http = require('http')

// 创建 web 服务器实例
const server = http.createServer()

// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', (req, res)=>{
    console.log('Someone visit our web server.')
})

// 启动服务器
server.listen(8000, ()=>{
    console.log('server runing at http://127.0.0.1:8000')
})