<template>
  <div class="home">
    <el-container>
      <el-header>
        <base-header :activeIndex="activeIndex"></base-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <base-footer v-show="showFooter"></base-footer>
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
    if (to.path === "/") {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
    this.activeIndex = to.path;
    next();
  }
};
</script>
