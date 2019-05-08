const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const projectName = require("./package.json").name;
module.exports = {
  // 关闭eslint校验
  lintOnSave: true,
  publicPath: "/",
  outputDir: "dist",
  productionSourceMap: false,
  devServer: {
  	// 端口
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
        "@": resolve("src")
      }
    }
  }

}
