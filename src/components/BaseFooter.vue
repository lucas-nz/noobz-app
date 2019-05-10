<template>
  <el-footer class="me-area">
    <div class="me-footer">
      <p>
        Designed by
        <strong>
          <router-link to="/" class="me-login-design-color">Noob&z</router-link>
        </strong>
      </p>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.me-footer {
  min-width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1024;
  text-align: center;
  font-family: "Courier New", sans-serif;
  font-size: 18px;
}
.me-login-design-color {
  color: #5fb878 !important;
}
</style>
