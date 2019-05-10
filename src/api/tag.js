import request from "@/request";

export function getHotTags() {
  return request({
    url: "tags/hot",
    method: "get"
  });
}
