// 导入 fs 模块
const fs = require('fs')
const { resolve } = require('path')
// 导入 path 模块
const path = require('path')

// 定义正则表达式，分别匹配 样式标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname, '/time.html'), 'utf-8', (err, data)=>{
    // 失败
    if(err) return console.log('读取失败！！！')
    // 成功 调用对应的三个方法，分别拆解 css js html 文件
    resolveCss(data)
    resolveJS(data)
})

// 定义处理 css 样式的方法
function resolveCss(htmlStr) {
    // 使用正则提取的内容
    const r1 = regStyle.exec(htmlStr)
    // 将提取出来的样式字符串，进行字符串的 replace 替换操作
    // console.log('----------------')
    // console.log(r1[0])
    // console.log('-------------------')
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    // 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'), newCss, (err)=>{
        if(err) return console.log('写入 css 样式失败！' + err.message)
        console.log('写入样式文件成功！')
    })
}

// 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
    // 通过正则 提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    // 提取的内容进一步出理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 将处理的结果 写入 clock 目录中的 index.js 文件中
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, (err)=>{
        if(err) return console.log('写入 Jacascript 脚本失败！' + err.message)
        console.log('写入 JS 脚本成功！')
    })
}