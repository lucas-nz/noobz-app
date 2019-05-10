import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  // 当keep-alive ,popState 导航下有效
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "hash",
  routes: [
    {
      path: "",
      component: Home,
      children: [
        {
          path: "/",
          component: () =>
            import(/* webpackChunckName = "index" */ "@/views/Index.vue")
        },
        {
          path: "/:type/all",
          component: () =>
            import(/* webpackChunckName = "allCategoryTag" */ "@/views/AllCategoryTag.vue")
        }
      ]
    }
  ]
});
