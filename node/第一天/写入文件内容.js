const fs = require('fs')

// 1. 调用 fs.writeFile() 方法，写入文件的内容
//    参数1：表示文件的 存放路径
//    参数2：表示要 写入的内容
//    参数3：回调函数

fs.writeFile('../写入文本_01.txt', 'hello word!', (err)=>{
    // 如果文件写入成功，则 err 的值为 null
    // 如果文件写入失败，则 err 的值为 错误对象
    console.log(err)
    
    if(err) {
        return console.log('文件写入失败！！')
    }
    console.log('文件写入成功！')
})