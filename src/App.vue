<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
body {
  background-color: #f5f5f5;
  font-weight: 400;
  line-height: 1.5;
}
a {
  cursor: pointer;
  text-decoration: none;
  transition: none 86ms ease-out;
}
.me-area {
  background-color: #fff;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  position: relative;
}
* {
  padding: 0;
  margin: 0;
}
.el-card {
  font-family: "Courier New", "Microsoft YaHei", sans-serif;
  margin: 10px auto;
}
.me-pull-right {
  float: right;
}
</style>
