// module 对象介绍：
// 在每个 .js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息
// 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。

// console.log(module)

// 在一个自定义模块中 默认情况下 module.exports = {}

// 向 module.exports 对象上挂载 username 属性
module.exports.username = 'QianTangx'

// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function() {
    console.log('Hello')
}