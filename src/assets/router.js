import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // which is lazy-loaded when the route is visited.
      // 按需加载
      // webpack3 提供魔法注释 /* webpackChunkName: "about" */ 指定chunk命名
      component: () => {return import(/* webpackChunkName: "about" */ "./views/About.vue");}
    }
  ]
});
