<template>
  <div>
    <el-container>
      <el-main>
        <article-scroll></article-scroll>
      </el-main>
      <el-aside>
        <card-me class="me-card"></card-me>
        <card-tags></card-tags>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import ArticleScroll from "@/components/ArticleScroll";
import CardMe from "@/components/card/CardMe";
import CardTags from "@/components/card/CardTags";
export default {
  data() {
    return {};
  },
  components: {
    ArticleScroll,
    CardMe,
    CardTags
  }
};
</script>
<style scoped>
.el-aside {
  width: 300px;
  margin-left: 30px;
}
.el-main {
  padding: 0 20px;
}
</style>
