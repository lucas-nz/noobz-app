<template>
  <div>
    <el-card>
      <div slot="header">
        <span class="me-card-header">最热标签</span>
        <a class="me-pull-right me-card-more">查看全部</a>
      </div>
      <el-alert
        title="提示"
        description="暂无最热标签"
        type="info"
        show-icon
        :closable="false"
        v-if="noData"
      ></el-alert>
      <div
        class="me-inherit"
        element-loding-text="加载中"
        v-loading="loading"
        element-loading-spinner="el-icon-loading"
      >
        <el-tag
          v-for="tag in tags"
          :key="tag.tagname"
          type="success"
          size="small"
          class="me-tag"
          @click="showTag(tag.tagname)"
        >
          {{ tag.tagname }}
        </el-tag>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getHotTags } from "@/api/tag";

export default {
  data() {
    return {
      tags: [],
      loading: true,
      noData: false
    };
  },
  methods: {
    getHot() {
      let that = this;
      getHotTags()
        .then(result => {
          that.tags = result.data;
          that.loading = true;
        })
        .catch(() => {
          that.$layer.msg("最热标签加载失败");
          that.noData = true;
        })
        .finally(() => {
          that.loading = false;
        });
    },
    showTag(tagname) {
      this.$router.push(`${tagname}/all`);
    }
  },
  created() {
    this.getHot();
  }
};
</script>
<style scoped>
.me-tag {
  margin: 5px 7px;
  cursor: pointer;
}
</style>
