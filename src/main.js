// 这个 main.js 是我们这个项目JS的入口

// 初始化 npm => npm init -y (由于网速问题 所有 npm 命令 都可以用 cnpm 代替)

// 安装 jquer =》npm i jquery -s 安装完成后会生成 node_modules 目录 下面为安装的组件

// 使用 webpack 打包 由于浏览器不能识别ES6高级语法,需要通过 webpack 打包后导入使用
// 1.安装webpack 固定版本( npm install webpack@3.0.0 -g 全局安装) 最新版本(npm install webpack -g 全局安装)
// 2.固定版本(npm install webpack@3.6.0 -D 本地安装) 最新版本(npm install webpack -D 全局安装)
// 3.webpack 需要打包路径 打包后输出路径
// 4.在webpack.config.js 可以配置打包的输入输出路径 不必每次打包都填写

// 使用 webpack-dev-server 工具,可以实现监听代码改变 自动打包
// 1.运行 npm i  webpack-dev-server -D 安装到项目本地 开发依赖
// 2.安装完毕后 webpack-dev-server 用法和 webpack 命令的用法,完全一致
// 3.由于是在项目本地安装的 webpack-dev-server 所以,无法把它当作脚本命令,在 powellshell 终端中直接运行
// 4. 需要在 package.json 中的 scripts 属性下配置我们需要执行的命令
//    （"dev": "webpack-dev-server --port 3000 --open --contentBase src"），
//     --port 3000: 设置端口号,--open 运行打开浏览器 ，--contentBase src设置默认打开路径 --hot无刷新重载
// 5.在用 npm run 配置环境 (如:npm run dev)
// 6.run报错,包有问题,直接删除重新导入,并且使用 webpack-dev-server 要求 必须在本地安装 webpack ,全局安装不可以
// 7. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到实际目录中，而是直接托管到了电脑内存中

// 使用 cnpm i html-webpack-plugin -D 命令安装 webpack-plugin 插件 可以是html界面运行在内存中
// 1.在配置文件 webpack.config.js 中导入安装插件

// 注意：webpack 默认只打包处理 JS 类型的文件，无法处理其他非 JS 类型的文件；
// 如果需要处理 非JS类型的文件，我们需要手动安装一些合适的第三方加载器
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D 两个插件
// 2. 在  webpack.config.js 配置文件中新增 module ，它是一个对象， 在 module 对象身上，有一个 rules 属性数组，
//    这个数组中存放了所有第三方模块的匹配和处理规则
// 注意：webpack 处理第三方文件类型的过程
// 1. 发现这个要处理的文件不是 JS ，然后就去查找配置文件中查找有没有对应第三方 loader 规则
// 2. 如果找到对应的规则，就会调用 对应的 loader 处理这个文件类型
// 3. 在调用 loader 的时候，是从后往前调用的
// 4. 当最后一个 loader 调用完毕，会把处理结果 直接交给 webpack 进行打包合并，最终输入到 bundle.js中

// webpack 只能处理 ES6 基础语法,高级语法以及 ES7 等语法无法处理,需要安装对应的 loader
// 通过 Babel 可以将高级的语法转换为低级语法
// 1. 在webpack 可以安装两套包,安装 Babel相关loader
// 1.1 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D 第一套包
// 1.2 cnpm i babel-preset-env babel-preset-stage-0 -D 第二套包
// 2. 打开 webpack 的配置文件，在 module 节点下的 rule 数组中，添加一个新的匹配规则
// 2.1 {text：/\.js$/,user: 'babel-loader' , exclude: /node_modules/ }
// 2.2 注意：在配置 babel 的 loader 规范的时候，必须把 node_modules 目录，通过 exclude 选项排除原因有两：
// 2.2.1 如果不排除 node_modules，则 Banel 会把  node_modules 中所有第三方 JS 文件都打包编译，耗内存且慢
// 2.2.2 哪怕 Babel 把所有 node_modules 中 JS 转换完毕了，但是项目也无法正常运行
// 3. 在项目根目录中，新建一个叫 .babelre 的 babel 配置文件，这个文件，属于JSON格式，所以符合JS语法规范，不能注释，双引号
// 3.1 在 .babelrc 中写配置 { presets:["env","stage-0"], plugins: ["transform-runtime"] }


// 1.导入Jquery
// import *** from *** 是ES6导入模块的方法
// import $ from 'jquery'
//
// // 使用 import 语法，导入样式
// import './css/index.css'
// import './css/base.less'
// import './css/base1.scss'
//
//
// $(function () {
//     //选择器设置样式yes
//     // 偶数行
//     $('li:odd').css('backgroundColor', 'red')
//     // 奇数行
//     $('li:even').css('backgroundColor', function () {
//         return "#" + "dddddd"
//     })
// })

// class Person {
//     //webpack 只能处理 ES6 基础语法,高级语法以及 ES7 等语法无法处理,需要安装对应的 loader
//     static info = {name: 'zs', age: 20}
// }


// 注意在webpack中 import Vue from 'vue' 导用的 Vue 构造函数，功能不全,
// 只提供了 runtime-only 的方式，没有提供向网页的使用方法
// import Vue from 'vue'

// 包的查找规则：
// 1. 查找项目根目录有没有 node_modules 的文件夹
// 2. 在 node_modules 根据包名找对应的文件夹
// 3. 在对应的文件夹，找一个 叫package.json的包配置文件
// 4. 在 package.json 文件中，查找一个main属性【main属性指定了这个包在被加载时候的入口文件】

import Vue from '../node_modules/vue/dist/vue.js'

// runtime-only 不支持这样创建组件
// var login = {
//     terminate: '<h1> login组件</h1>'
// }

// 使用.vue的组件
// 1.导入组件
import login from "./login.vue";
// 2.默认 webpack 无法打包 .vue 文件 需要安装 相关loder:
// 3.cnpm i vue-loader vue-template-compiler -D
// 4.新增配置项,  {test: /\.vue$/, use: ['vue-loader']},
// 4.

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123',
    },
    // render: function (createElements) {
    //     return createElements(login)
    // }
    render: c => c(login),
})

// 导入接收对象
// export 必须使用花括号形式接收
import m1, {title, content} from './text.js'

console.log(m1);
console.log(title + "------" + content);