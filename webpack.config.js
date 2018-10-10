const path = require('path')

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: {
    test: './src/test.js',
    // earth: './src/earth.js',
    // quickshare: './src/quickshare.js'
  },
  // string | object | array
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    filename: '[name].js', // 用于多个入口点(entry point)（出口点？）
    publicPath: '.', // 输出解析文件的目录，url 相对于 HTML 页面
  },
  module: {
    // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'stage-0']
        },
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 8000,
    disableHostCheck: true,
    proxy: {
      "/api": { //需要代理的路径
        target: "http://rest2.janestrip.com", //需要代理的域名
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true //必须配置为true，才能正确代理
      },
      "/oss": {
        target: "http://janestrip-timeegg-img.janestrip.com",
        pathRewrite: {
          '^/oss': ''
        },
        changeOrigin: true
      }
    },
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt'),
    //   ca: fs.readFileSync('/path/to/ca.pem'),
    // }
  }
}