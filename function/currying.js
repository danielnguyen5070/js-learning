const buildUrl = (baseUrl) => (endpoint) => (queryParams) => {
  const query = new URLSearchParams(queryParams).toString();
  return `${baseUrl}/${endpoint}?${query}`;
};

const apiBase = "https://api.example.com";

const apiUrl = buildUrl2(apiBase);
// Create specific endpoint builder
const usersUrl = apiUrl("users");
const postsUrl = apiUrl("posts");

// Use it
console.log(usersUrl({ page: 2, limit: 10 }));
// https://api.example.com/users?page=2&limit=10

console.log(postsUrl({ category: "tech", sort: "desc" }));
// https://api.example.com/posts?category=tech&sort=desc
