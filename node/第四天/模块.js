// 和函数作用域类似，在自定义模块中定义的变量、方法等成员
// 只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域

const username = 'QianTangx'

function sayHello() {
    console.log('大家好，我是' + username)
  }

// 防止了全局变量污染的问题