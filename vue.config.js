const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const projectName = require("./package.json").name;
module.exports = {
  // 关闭eslint校验
  lintOnSave: false,
  publicPath: "/",
  outputDir: "dist",
  productionSourceMap: false,
  devServer: {
  	// 端口
    historyApiFallback: true,
    noInfo: true,
  	port: 8080,
    proxy: {
  	  "/api": {
  	    target: "http://10.1.93.237:8888",
        // ws: false, // 设置是否代理websocket
        changeOrigin: true
      }
    }

  },
  configureWebpack: {
    name: projectName,
    resolve: {
      alias: {
        "@": resolve("src"),
        // 添加本配置, 成功使用 vue-layer
        "vue$": "vue/dist/vue.js"
      }
    }
  }

}
