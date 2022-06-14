# HTTP
HTTP 是一种 超文本传输协议(Hypertext Transfer Protocol), 协议详细规定了浏览器和万维网服务器之间互相通信的规则

## 请求报文
重点是格式与参数
```
起始行       POST  /s?ie=UTF-8    HTTP/1.1
请求头部     Host: atguigu.com
            Cookie: name=guigu
            Content-type: application/x-www-from-urlencoded
            User-Agent: chrome 83
空行
实体        username=admin&password=admin
```

## 响应报文
```
行      HTTP/1.1    200    OK
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行
体      <html>
            <head>
            </head>
            <body>
                <h1> QianTangx </h1>
            </body>
        </html>
```
* 400
* 403
* 401
* 500
* 200