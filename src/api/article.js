import request from "@/request";

export function getArticles(query, page) {
  return request({
    url: "/articles",
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

export function listArchives() {
  return request({
    url: "/articles/listArchives",
    method: "get"
  });
}

export function listHotArticles() {
  return request({
    url: "/articles/hot",
    method: "get"
  });
}

export function listNewArticles() {
  return request({
    url: "/articles/new",
    method: "get"
  });
}
