<template>
  <div v-title :data-title="title">
    <el-row>
      <el-col :span="16" :offset="4">
        <h1 class="me-view-title">{{ article.title }}</h1>
        <div class="me-view-author">
          <img
            :src="article.author.avatar"
            :alt="article.author.nickname"
            @error="loadError"
            class="me-view-avatar"
          />
          <div class="me-view-info">
            <span>
              <i class="icon-user"></i>&nbsp;&nbsp;{{ article.author.nickname }}
            </span>
            <div class="me-view-meta">
              <span>{{ article.createDate | format }}</span>
              <span>阅读 {{ article.viewCounts }}</span>
              <span>评论 {{ article.commentCounts }}</span>
            </div>
          </div>
        </div>
        <markdown-editor :editor="editor"></markdown-editor>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { viewArticle } from "@/api/article";
import MarkdownEditor from "@/components/markdown/MarkdownEditor";
import default_avatar from "@/static/img/me.png";
export default {
  data() {
    return {
      article: {
        id: "",
        title: "",
        author: {},
        tags: [],
        viewCounts: 0,
        weight: 0,
        commentCounts: 0,
        createDate: "",
        category: {}
      },
      editor: {
        value: "",
        toolbarsFlag: false,
        subfield: false,
        defaultOpen: "preview"
      }
    };
  },
  created() {
    this.getArticle();
  },
  computed: {
    avatar() {
      let avatar = this.$store.state.avatar;
      if (avatar.length > 0) {
        return avatar;
      }
      return default_avatar;
    },
    title() {
      return `${this.article.title} -- noobz`;
    }
  },
  methods: {
    getArticle() {
      let id = this.$route.params.id;
      viewArticle(id).then(result => {
        Object.assign(this.article, result.data);
        this.editor.value = result.data.body.content;
      });
    },
    loadError() {
      this.article.author.avatar = default_avatar;
    }
  },
  components: {
    MarkdownEditor
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#fff";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "#f5f5f5";
    next();
  }
};
</script>
<style scoped>
.me-view-title {
  font-size: 2.2em;
  line-height: 1.3;
}
.me-view-author {
  margin-top: 30px;
  height: 100px;
}
.me-view-avatar {
  width: 70px;
  height: 70px;
  border-radius: 80px;
  vertical-align: middle;
}
.me-view-info {
  margin-left: 20px;
  vertical-align: middle;
  display: inline-block;
}
.me-view-meta {
  font-size: 13px;
  color: #969696;
}
.me-view-meta span {
  margin-right: 8px;
}
</style>
