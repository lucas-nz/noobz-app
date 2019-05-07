import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/category/all",
          name: "categoryAll",
          component: () => import("@/views/AllCategoryTag.vue")
        }
      ]
    }
  ]
});
