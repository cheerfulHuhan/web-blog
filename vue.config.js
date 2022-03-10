const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // 是否开启 eslint 自动校验
  lintOnSave: true,
  // 不输出 map 文件，以加速生产环境构建
  productionSourceMap: false,
  devServer: {
    devMiddleware: {
      publicPath: '/',
    },
    hot: true,
    port: '9999',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
    // 反向代理
    // proxy: {
    //   '/mock-api/': {
    //     target: 'https://vue-typescript-admin-mock-server-armour.vercel.app/mock-api',
    //     ws: true,
    //     pathRewrite: {
    //       '^/mock-api/': ''
    //     },
    //     changeOrigin: true,
    //     secure: false
    //   }
    // }
  },
  chainWebpack: config => {
    // 当有很多页面时，它会导致太多毫无意义的请求
    config.plugins.delete('prefetch')
    // 开发环境 sourcemap 不包含列信息
    config.when(process.env.NODE_ENV === 'development',
      config => config.devtool('cheap-source-map')
    )
    // svg
    const dir = path.resolve(__dirname, 'src/icons/svg')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include
      .add(dir)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false })
      .end()
    config.plugin('svg-sprite')
      .use(require('svg-sprite-loader/plugin')),
      [{ pluginSprite: true }]
    config.module
      .rule('svg')
      .exclude
      .add(dir)
    // 将运行代码单独生成文件
    if (process.env.NODE_ENV !== 'development') {
      config.cache({
        // 将缓存类型设置为 filesystem, 默认是 memory
        type: 'filesystem',
        buildDependencies: {
          // 更改配置文件时重新缓存
          config: [__filename]
        }
      })
      config.optimization.runtimeChunk('single')
    }
  }
}


