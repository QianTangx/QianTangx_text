// 调用 模块
// const custom = require('./模块.test')
// console.log(custom)


// 在外界使用 require 导入一个自定义模块的时候，得到的成员，
// 就是 那个模块中，通过 module.exports 指向的那个对象  
const m = require('./module对象')
console.log(m)

// 默认情况下 exports: {}