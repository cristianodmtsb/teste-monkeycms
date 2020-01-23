export function listPostRequest() {
  return {
    type: "@posts/REQUEST"
  };
}
export function listPostSuccess(posts) {
  console.log("posts actions", posts);
  return {
    type: "@posts/SUCCESS",
    posts
  };
}

export function addPost(post) {
  return {
    type: "@posts/ADD",
    post: {
      id: Math.random(),
      title: post.title,
      content: post.content
    }
  };
}

export function deletePost(id) {
  return { type: "@posts/DELETE", id };
}
