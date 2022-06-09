const express = require('express')
const app = express()

// 调用 express.static() 方法，快速对外蹄冻静态资源
app.use(express.static('./clock'))

app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})