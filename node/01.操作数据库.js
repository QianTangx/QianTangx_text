// 导入 mysql 模块
const mysql = require('mysql')

// 建立与 MySQL 数据的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'admin123', // 登录数据库的密码
    database: 'qiantangx_sql_01' // 指定要操作的数据库
})


/*
// 测试 mysql 模块能否正常工作
db.query('select 1', (err, results) => {

    // mysql 模块工作期间报错了
    if (err) return console.log(err.message)

    // 能成功的执行 SQL 语句
    console.log(results)
})*/

/*
// 查询 users 表中的所有数据
const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {

    // 查询数据失败
    if(err) return console.log(err.message)

    // 查询数据成功
    console.log(results)
})*/

// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man, password 的值为 pcc123
const user = {username: 'Spider-Man', passwoed: 'pcc123'}

// 定义执行的 SQL 语句
const sqlStr = 'insert into users (username, passwoed) values (?, ?)'

// 执行 SQL 语句
db.query(sqlStr, [user.username, user.passwoed], (err, results) => {

    // 执行 SQL 语句失败
    if(err) return console.log(err.message)
 
    // 执行 SQL 语句成功
    // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性，来判断是否插入数据成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功！')
    }
})