<template>
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
