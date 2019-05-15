<template>
  <div>
    <el-card>
      <div slot="header">
        <span class="me-card-header">{{ header }}</span>
      </div>
      <ul>
        <li v-for="item in articles" :key="item.id" class="me-list">
          <el-link type="primary">
            {{ item.title }}
          </el-link>
          <span class="me-icon-gray me-pull-right me-medium">
            <span v-if="item.viewCounts" class="">
              {{ item.viewCounts }} <i class="icon-fire"></i>
            </span>
            <span v-else>
              {{ item.createDate | format }}
            </span>
          </span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.me-article-fire {
  color: #ff0000;
}
.me-medium {
  font-size: 14px;
}
</style>
