<template>
  <div>
    <el-card>
      <el-tag
        v-for="tag in tags"
        :key="tag.tagname"
        type="success"
        size="small"
        class="me-tag"
      >
        {{ tag.tagname }}
      </el-tag>
    </el-card>
  </div>
</template>
<script>
import { getHotTags } from "@/api/tag";

export default {
  data() {
    return {
      tags: []
    };
  },
  methods: {
    getHot() {
      let that = this;
      getHotTags()
        .then(result => {
          that.tags = result.data;
        })
        .catch(() => {
          this.$layer.msg("最火标签加载失败");
        });
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
}
</style>
