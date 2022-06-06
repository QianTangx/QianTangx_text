const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    // 定义一个字符串，包含中文
    const str = `您请求的 URL 地址是 ${req.url}, 请求的 method 类型为 ${req.method}`
    // 调用 res.setHeader() 方法，设置 constent-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res.end() 将内容相应给客户端
    res.end(str)
})

server.listen(80, () => {
    console.log('server rining at http://127.0.0.1')
})