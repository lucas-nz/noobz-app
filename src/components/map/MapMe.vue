<template>
  <div>
    <el-amap :zoom="zoom" :center="center">
    </el-amap>
  </div>
</template>
<script>
  import ElAmap from "vue-amap/src/lib/components/amap";
  export default {
    components: {ElAmap},
    data() {
      return {
        zoom:16,
        center:[121.406051,31.179695]
      }
    }
  }
</script>
