<template>
  <el-card>
    <div slot="header">
      <span class="me-card-header">文章归档</span>
    </div>
    <ul>
      <li
        v-for="a in archives"
        :key="a.year + a.month"
        class="me-list"
        @click="viewArchive(a.year, a.month)"
      >
        <el-link type="primary">
          {{ `${a.year}年${a.month}月` }}
        </el-link>
      </li>
    </ul>
  </el-card>
</template>
<script>
export default {
  props: {
    archives: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    viewArchive(year, month) {
      this.$router.push(`/archives/${year}/${month}`);
    }
  }
};
</script>
<style scoped></style>
