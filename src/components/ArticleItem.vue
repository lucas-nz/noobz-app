<template>
  <el-card :header="item.title" shadow="hover">
    {{ item.summary }}
  </el-card>
</template>
<script>
export default {
  name: "ArticleItem",
  props: {
    item: Object
  },
  data() {
    return {};
  }
};
</script>
