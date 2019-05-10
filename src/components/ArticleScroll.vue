<template>
  <scroll-page
    :loading="loading"
    :no-data="noData"
    :offset="offset"
    :no-data-tip="noDataTip"
    :no-data-icon-class="noDataIconClass"
    v-on:next-page="load"
  >
    <article-item
      v-for="item in articles"
      v-bind="item"
      :key="item.id"
    ></article-item>
  </scroll-page>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import { getArticles } from "@/api/article";
import ScrollPage from "@/components/ScrollPage";
export default {
  components: {
    ArticleItem,
    ScrollPage
  },
  props: {
    page: {
      type: Object,
      default() {
        return {};
      }
    },
    query: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      loading: false,
      noData: false,
      offset: 250,
      noDataTip: "下拉加载更多",
      noDataIconClass: "el-icon-bottom",
      innerPage: {
        pageSize: 5,
        pageNumber: 1,
        name: "a.createDate",
        sort: "desc"
      },
      articles: []
    };
  },
  created() {
    console.log("create");
    this.listArticles();
  },
  watch: {
    query: {
      handler() {
        console.log("query handler");
        this.noData = false;
        this.articles = [];
        this.innerPage.pageNumber = 1;
        this.listArticles();
      },
      deep: true
    },
    page: {
      handler() {
        console.log("page handler");
      }
    }
  },
  methods: {
    load() {
      this.listArticles();
    },
    listArticles() {
      let that = this;
      that.loading = true;
      getArticles(that.query, that.innerPage)
        .then(data => {
          let newArticles = data.data;
          if (newArticles && newArticles.length > 0) {
            that.innerPage.pageNumber += 1;
            that.articles = that.articles.concat(newArticles);
          } else {
            that.noData = true;
            that.offset = 500;
            that.noDataTip = "没有更多了";
            that.noDataIconClass = "el-icon-ice-cream-round";
          }
        })
        .catch(() => {
          that.$message({
            type: "error",
            message: "文章加载失败.",
            showClose: true
          });
        })
        .finally(() => {
          that.loading = false;
        });
    }
  }
};
</script>
<style scoped></style>
