import request from "@/request";

export function getArticles(query, page) {
  return request({
    url: "articles",
    method: "get",
    params: {
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    }
  });
}
