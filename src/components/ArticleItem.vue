<template>
  <el-card shadow="hover" :body-style="{ padding: '16px' }" class="me-card">
    <div>
      <el-link :underline="false" class="me-article-title" @click="view(id)">
        {{ title }}
      </el-link>
      <el-button
        v-if="weight > 0"
        circle
        icon="el-icon-s-promotion"
        type="text"
      >
        置顶
      </el-button>
      <span class="me-pull-right me-article-icon">
        <i class="me-pull-right icon-comment"> &nbsp;{{ commentCounts }}</i>
      </span>
      <span class="me-pull-right me-article-icon">
        <i class="icon-fire">&nbsp;{{ viewCounts }}</i>
      </span>
    </div>
    <div class="me-article-description">&nbsp;&nbsp;{{ summary }}</div>
    <div>
      <i class="icon-user me-article-icon">&nbsp;{{ author.nickname }}</i>
      <el-tag
        v-for="tag in tags"
        :key="tag.tagname"
        type="success"
        @click="tagView(tag.tagname)"
        size="mini"
        class="me-article-tag"
      >
        {{ tag.tagname }}
      </el-tag>
      <i class="icon-time-circle me-pull-right me-article-icon">
        {{ createDate | format }}
      </i>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "ArticleItem",
  props: {
    id: Number,
    weight: Number,
    title: String,
    commentCounts: Number,
    viewCounts: Number,
    summary: String,
    author: Object,
    tags: Array,
    createDate: String
  },
  data() {
    return {};
  },
  methods: {
    view(id) {
      this.$router.push(`/article/${id}`);
    },
    tagView(tagname) {
      this.$router.push({
        path: `/tag/${tagname}`
      });
    }
  }
};
</script>
<style>
.me-article-title {
  font-weight: 600;
  font-size: larger;
}

.me-article-icon {
  color: #b0b0b0;
  margin-left: 10px;
  font-size: small;
  max-height: 16px;
}

.me-article-description {
  font-size: 13px;
  line-height: 25px;
  padding: 10px 5px;
}
.me-article-tag {
  margin-left: 10px;
  cursor: pointer;
}
</style>
