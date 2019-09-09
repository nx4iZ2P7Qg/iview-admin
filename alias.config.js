// 需要在idea config中添加webpack configuration file为本文件地址，才可以解决import中的'@/xxx'路径跳转问题
// 初步分析是idea没有能正常的解析到@
// 本文件内容与vue.config.js有些类似

// alias.config.js
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      'common': resolve('src/common'),
      'api': resolve('src/api'),
      '_c': resolve('src/components')
    }
  }
}
