<template>
  <el-card>
    <el-tooltip effect="dark" content="点我" placement="top-start">
      <div class="me-image">
        <a @click="contactMe">
          <img src="../../static/img/me.png" alt="" />
          <span>noobz</span>
        </a>
      </div>
    </el-tooltip>
    <div class="me-fly me-image">
      <el-tooltip effect="dark" visible-arrow="false" content="点击头像联系我">
        <span><i class="icon-QQ-circle-fill"></i></span>
      </el-tooltip>
      <el-popover trigger="hover" placement="bottom">
        <con-git-hub></con-git-hub>
        <i slot="reference" class="icon-github-fill"></i>
      </el-popover>
      <i class="icon-wechat-fill"></i>
      <i class="icon-alipay-circle-fill"></i>
    </div>
  </el-card>
</template>

<script>
import ConGitHub from "@/components/contact/ConGitHub";
export default {
  data() {
    return {};
  },
  components: {
    ConGitHub
  },
  methods: {
    contactMe() {
      window.open(
        "http://b.qq.com/webc.htm?new=0&sid=1443606056&o=http://127.0.0.1:8080&q=7",
        "_blank",
        "height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no"
      );
    }
  }
};
</script>
<style scoped>
.me-image {
  width: 100px;
  font-family: 华文行楷, sans-serif;
  text-align: center;
  margin: 0 auto;
  font-size: 25px;
}
.me-image img {
  height: auto;
  width: 100%;
  border-radius: 80px;
}
.me-fly i {
  font-size: 20px;
  margin-left: 10px;
}
</style>
