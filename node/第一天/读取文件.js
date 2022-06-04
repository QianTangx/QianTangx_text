// 1. 导入 fs 模板，来操作文件
const fs = require('fs')
// __dirname 表示当前文件所处目录
console.log(__dirname)

// 2. 调用 fs.readFile() 方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr

fs.readFile('../文本.txt', 'utf8', (err, dataStr)=>{
    // 2.1 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err)
    console.log('------------')
    // 2.2 打印成功的结果
    console.log(dataStr)

    // 3. 判断文件是否 读取成功
    if (err) {
        return console.log('读取文件失败'+err.message)
    }
    console.log('读取成功！！！')
})