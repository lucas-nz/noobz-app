<template>
  <div v-loading="loading" style="width: 100%; height: 100%;">
    <a :href="url" target="_blank">
      <div class="github-avatar">
        <my-img :src="avatar" @load="loaded" radius="80px">
          <div slot="error"></div>
        </my-img>
        <span>{{ name }}</span>
      </div>
    </a>
  </div>
</template>
<script>
import { getGitHubInfo } from "@/api/contact";
import MyImg from "@/components/recom/MyImg";
export default {
  data() {
    return {
      loading: true,
      name: "zsz1995",
      avatar: "",
      url: ""
    };
  },
  components: {
    MyImg
  },
  created() {
    this.getGitHubInfo();
  },
  methods: {
    getGitHubInfo() {
      getGitHubInfo(this.name)
        .then(data => {
          this.avatar = data.avatar_url;
          this.url = data.html_url;
        })
        .catch(() => {
          this.$layer.msg("获取github信息失败.");
        });
    },
    loaded() {
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.github-avatar {
  margin: 0 auto;
  width: 50px;
  text-align: center;
}
</style>
