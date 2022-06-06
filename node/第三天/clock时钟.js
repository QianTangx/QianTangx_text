const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()

// 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    // 获取到客户端请求的 URL 地址
    //      /clock/index.html
    //      /clock/index.css
    //      /clock/index.js
    const url = req.url

    // 把请求的 URL 地址映射为具体的文件存放路径
    // const fpath = path.join(__dirname, url)
    // 把请求的 URL 地址映射为具体的文件存放路径
    const fpath = path.join(__dirname, url)
    // 预定义一个空白的文件存放路径
    // let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        // /index.html
        // /index.css
        // /index.js
        fpath = path.join(__dirname, './clock', url)
    }

    // 根据 映射 过来的文件路径读取文件的内容
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        // 读取失败，向客户端响应固定的 错误消息
        if (err) return res.end('404 Not found')
        // 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)

    })
})
server.listen(80, () => {
    console.log('server rining at http://127.0.0.1')
})