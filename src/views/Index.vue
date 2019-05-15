<template>
  <div>
    <el-container class="me-container">
      <el-main>
        <article-scroll></article-scroll>
      </el-main>
      <div class="me">
        <el-aside style="width: 400px;">
          <card-me class="me-card"></card-me>
          <card-tags></card-tags>
          <card-archive :archives="archives"></card-archive>
          <card-article
            header="最新文章"
            :articles="articlesNew"
          ></card-article>
          <card-article
            header="最热文章"
            :articles="articlesHot"
          ></card-article>
        </el-aside>
      </div>
    </el-container>
  </div>
</template>

<script>
import ArticleScroll from "@/components/ArticleScroll";
import CardMe from "@/components/card/CardMe";
import CardTags from "@/components/card/CardTags";
import CardArchive from "@/components/card/CardArchive";
import CardArticle from "@/components/card/CardArticle";
import { listArchives, listHotArticles, listNewArticles } from "../api/article";


export default {
  data() {
    return {
      archives: [],
      articlesHot: [],
      articlesNew: []
    };
  },
  components: {
    ArticleScroll,
    CardMe,
    CardTags,
    CardArchive,
    CardArticle
  },
  created() {
    this.listArchives();
    this.listHotArticles();
    this.listNewArticles();
  },
  methods: {
    listArchives() {
      listArchives()
        .then(result => {
          this.archives = result.data;
        })
        .catch(() => {
          this.$layer.msg("文章归档加载失败.");
        });
    },
    listHotArticles() {
      listHotArticles()
        .then(result => {
          this.articlesHot = result.data;
        })
        .catch(() => {
          this.$layer.msg("最热文章加载失败.");
        });
    },
    listNewArticles() {
      listNewArticles()
        .then(result => {
          this.articlesNew = result.data;
        })
        .catch(() => {
          this.$layer.msg("最新文章加载失败.");
        });
    }
  }
};
</script>
<style>
.me .el-aside {
  margin-left: 30px;
}
.el-main {
  padding: 0 20px;
}
.body-color {
  background: #f5f5f5;
}
</style>
