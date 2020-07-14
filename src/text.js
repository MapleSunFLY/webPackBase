// 在 Node 中暴露成员的方法 module.exports = {}
// 在 Node 中导入成员的方法 var 名称 = require("成员标识符")；

// 在 ES6 中，也通过规范的形式，规定了 ES6 中如何 导入 与 导出 模块
// 在 ES6 中导入模块，使用 import 模块名称 from "模块标识" 或者 import '模块路径' 导入模块
// 在 ES6 中暴露成员，使用 export default 和 export 向外暴露成员：

//暴露对象
// export default 向外暴露的成员，可以使用任意变量来接收 无论变量叫什么
// export default 在一个模块中只允许被暴露一次
// export default {
//     name: "zs",
//     age: 25,
// }

var info = {
    name: "zs",
    age: 25,
}
export default info

// 在一个模块中可以同时使用 export default 与 export 向外暴露对象
// 使用 export 暴露对象必须保持名称一致 如果想换名称接收 使用 as 起别名
// export 可以多次暴露
export var title = "小星星";
export var content = "哈哈哈";
