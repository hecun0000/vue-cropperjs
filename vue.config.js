const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {

    // config 参数为已经解析好的 webpack 配置
    configureWebpack: config => {
             if (process.env.NODE_ENV === 'production') {
                 // 为生产环境修改配置...
                 config.mode = 'production'
                 // 将每个依赖包打包成单独的js文件
                 let optimization = {
                     runtimeChunk: 'single',
                     splitChunks: {
                         chunks: 'all',
                         maxInitialRequests: Infinity,
                         minSize: 20000,
                         cacheGroups: {
                             vendor: {
                                 test: /[\\/]node_modules[\\/]/,
                                 name(module) {
                                     // get the name. E.g. node_modules/packageName/not/this/part.js
                                     // or node_modules/packageName
                                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                     // npm package names are URL-safe, but some servers don't like @ symbols
                                     return `npm.${packageName.replace('@', '')}`
                                 }
                             }
                         }
                     },
                    //  移除console.log
                    //  minimizer: [new UglifyPlugin({
                    //      uglifyOptions: {
                    //          compress: {
                    //              warnings: false,
                    //              drop_console: true, // console
                    //              drop_debugger: false,
                    //              pure_funcs: ['console.log'] // 移除console
                    //          }
                    //      }
                    //  })]
                 }
                 Object.assign(config, {
                     optimization
                 })
             } else {
                 // 为开发环境修改配置...
                 config.mode = 'development'
             }
            //  Object.assign(config, {
            //      // 开发生产共同配置
            //      resolve: {
            //          alias: {
            //              '@': path.resolve(__dirname, './src'),
            //              '@c': path.resolve(__dirname, './src/components'),
            //              '@p': path.resolve(__dirname, './src/pages')
            //          } // 别名配置
            //      }
            //  })
        }

      
}

