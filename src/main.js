import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAMap from "vue-amap";
import ElementUI from "element-ui";
import layer from "vue-layer";
// 自定义样式文件. iconfont global.css
import "@/assets";

import { formatTime } from "./util/time";

Vue.use(ElementUI);
Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false;
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "27d903a6173e5eca28b91cb77590004f",
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  uiVersion: "1.0.11"
});

Vue.filter("format", formatTime);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
