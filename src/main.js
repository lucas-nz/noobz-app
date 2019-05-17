import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import layer from "vue-layer";
// 自定义样式文件. iconfont global.css
import "@/assets";
import { formatTime } from "./util/time";
Vue.use(ElementUI);

Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false;
Vue.filter("format", formatTime);

Vue.directive("title", function(el) {
  document.title = el.dataset.title;
});
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
