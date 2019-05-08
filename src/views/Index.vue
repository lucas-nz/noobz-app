<template>
  <div>
    <article-item
      v-for="item in articles"
      :item="item"
      :key="item.id"
    ></article-item>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
import ArticleItem from "@/components/ArticleItem.vue";
export default {
  name: "Index",
  components: {
    ArticleItem
  },
  props: {
    offset: {
      type: Number,
      default: 100
    },
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
    this.listArticles();
  },
  methods: {
    listArticles() {
      let that = this;
      that.loading = true;
      getArticles(that.query, that.innerPage).then(data => {
        let newArticles = data.data;
        if (newArticles && newArticles.length > 0) {
          that.articles = that.articles.concat(newArticles);
        } else {
          that.noData = true;
        }
      });
    }
  }
};
</script>
