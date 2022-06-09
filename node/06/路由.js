// 创建路由模块

const express = require('express')
// const app = express()
const router = express.Router()

// 挂载路由

// 1. 不建议
// app.get('/', (req, res) => {res.send('Hello World')})
// app.post('/', (req, res) => {res.send('post Request')})

// 2.建议
router.get('/user/list', (req, res) => {
    res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
    res.send('Add user user.')
})



// app.listen(80, () => {
//     console.log('express server runing at http://127.0.0.1')
// })
module.exports = router