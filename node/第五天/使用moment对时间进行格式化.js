// 导入需要的包
// 注意：导入的名称 就是包装时候的名称

// 注意！
// 安装包 npm i moment 或 npm install moment
// package.json 记录包变化  里面的 dependencies 展示装过那些包
// npm install 可以一次性安装 dependencies 里所有的包
// 卸载包 npm uninstall 后跟要卸载的名字 如 moment
// npm镜像下载 打开cmd使用命令：

// npm config set registry https://registry.npm.taobao.org

// // 配置后可通过下面命令来验证是否成功
// 　npm config ls

// // 此时：metrics-registry = "http://registry.npm.taobao.org/"表示设置成功


// npm config get registry

// // 或
// npm info express

const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)