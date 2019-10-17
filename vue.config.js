const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // 如果@/config/index.js中的baseUrl不是空字符串，会被mock捕获到，以至于不能访问到后台
  // 原串 https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/ 并没有发挥作用
  // 若按文档建议，将baseUrl设置成''，会出现请求url不正常的情况，如http://127.0.0.1:330/profile_root/get_info
  // 其中profile_root是多余的，猜测是由于缺少baseUrl，路径都是以页面地址url为基础做相对路径处理
  devServer: {
    host: '127.0.0.1',
    port: 330,
    proxy: {
      // 后台请求要尊重已存在的前台路径(如/home)，且使用/xxx路径到各服务
      '/api/.*': {
        // 指向gateway
        target: 'http://127.0.0.1:332',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
