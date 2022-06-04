const fs = require('fs')
fs.readFile('../文件/成绩.md', 'utf8', (err, dataStr)=>{
    if(err) {
        return console.log('文件读取失败！'+err.message)
    }
    console.log('文件读取成功：'+dataStr.toString())

    // 先把成绩的数据，按照空格进行分割
    const arr = dataStr.split(' ')
    console.log(arr)
    // 循环分割后的数组，多每一项数据，进行字符串的替换操作
    const arrNew = []
    arr.forEach(i => {
        arrNew.push(i.replace('=', ':'))
    })
    console.log(arrNew)
    // 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    // 把处理完的内容添加到新文件里
    fs.writeFile('../文件/成绩new.md', newStr, err=>{
        if(err) {
            return console.log('写入文件失败！' + err.message)
        }
        console.log('成绩写入成功！')
    })
})
