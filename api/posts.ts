import request from './core';

const baseURL = '/posts';

export const getPosts = (post: string) => {
  const url = `${baseURL}?post=${post}`;
  return request.get<ResponsePosts.Get>(url);
};

export const getPostsById = (postId: number) => {
  const url = `${baseURL}/${postId}`;
  return request.get<ResponsePosts.GetById>(url);
};
