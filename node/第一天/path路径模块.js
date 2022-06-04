const path = require('path')
const fs = require('fs')

// 注意： .../ 会抵消前面的路径
const pathStr = path.join(__dirname,'../', '/文件/成绩.md')
console.log(pathStr)

fs.readFile(path.join(__dirname,'../', '/文件/成绩.md'), 'utf-8', (err, data)=>{
    console.log(data)
})

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'
// 获取文件名，默认有扩展名，添加参数2 则减去拓展名
const fullName = path.basename(fpath)
console.log(fullName)

const fullNames = path.basename(fpath, '.html')
console.log(fullNames)

// 获取2文件扩展名
const fext = path.extname(fpath)
console.log(fext)