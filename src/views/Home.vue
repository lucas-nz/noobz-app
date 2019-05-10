<template>
  <div class="home">
    <el-container>
      <base-header :activeIndex="activeIndex"></base-header>
      <el-main class="me-main">
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
      <base-footer class="me-footer" v-show="showFooter"></base-footer>
    </el-container>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "home",
  components: {
    BaseHeader,
    BaseFooter
  },
  data() {
    return {
      activeIndex: "/",
      showFooter: true
    };
  },
  mounted() {
    this.$route.path === "/"
      ? (this.showFooter = true)
      : (this.showFooter = false);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.activeIndex = to.path;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.showFooter = to.path === "/";
    this.activeIndex = to.path;
    next();
  }
};
</script>
<style scoped>
.me-main {
  margin: 60px auto 140px auto;
}
</style>
