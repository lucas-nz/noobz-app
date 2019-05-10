import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/icon/antDesign/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";
import layer from "vue-layer";
import ElementUI from "element-ui";

Vue.use(ElementUI);
Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
