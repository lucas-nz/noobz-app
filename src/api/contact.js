import request from "@/request";

export function getGitHubInfo(username) {
  return request({
    url: `https://api.github.com/users/${username}`,
    method: "get"
  });
}
