<template>
  <el-header class="el-header">
    <el-row>
      <el-menu
        :router="true"
        :default-active="activeIndex"
        menu-trigger="click"
        active-text-color="#409EFF"
        mode="horizontal"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/category/all">文章分类</el-menu-item>
        <el-menu-item index="/tag/all">标签</el-menu-item>
        <el-menu-item index="/archives">归档</el-menu-item>
        <el-menu-item index="/log">日志</el-menu-item>
        <el-menu-item index="/messageBoard">留言板</el-menu-item>
      </el-menu>
    </el-row>
  </el-header>
</template>
<script>
export default {
  name: "BaseHeader",
  props: {
    activeIndex: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.el-header {
  padding: 0 0;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  z-index: 1024;
}
</style>
