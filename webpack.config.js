// 路径操作path属性
const path = require('path')

// 导入在内存中生成 html 插件
const htmlWebpackPlugin = require('html-webpack-plugin')

//配置文件 通过Node的模块操作,向外暴露一个 配置对象
module.exports = {
    //在配置文件中指定入口和出口
    entry: path.join(__dirname, './src/main.js'),//入口,需要打包的文件
    output: {// 输出文件相关配置
        path: path.join(__dirname, './dist'), // 打包文件输出目录
        filename: 'bundle.js', // 输出文件名称
    },
    // 只要是插件，都一定要 放到 plugins节点中去
    plugins: [
        //创建一个在内存中生成 html 页面的插件 并配置属性
        new htmlWebpackPlugin({
            // 指定模板界面，将来会根据指定页面路径，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),

            //指定生成页面的名称
            filename: 'index.html'
        }),
    ],
    // 这个节点用于配置 所有第三方模块加载器
    module: {
        //所有第三方模块的匹配规则
        rules: [
            {
                //正则表达式 匹配规则 以 .css 结尾文件
                test: /\.css$/,
                // 处理的第三方loader规则
                use: ['style-loader', 'css-loader']
            },
            // 配置处理 .less 文件的loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},

            // 配置处理 .scss 文件的loader
            {test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }

}