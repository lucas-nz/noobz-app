import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
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
          path: "/category/all",
          component: () =>
            import(/* webpackChunckName = "allCategoryTag" */ "@/views/AllCategoryTag.vue")
        }
      ]
    }
  ]
});
