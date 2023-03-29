import { PageLimit } from '@/constants/pageLimit';
import request from './core';

const baseURL = '/posts';

export const getPosts = (post: string, skip: number) => {
  const url = `${baseURL}?post=${post}&skip=${skip}&limit=${PageLimit.limit}`;
  return request.get<ResponsePosts.Get>(url);
};

export const getPostsById = (postId: number) => {
  const url = `${baseURL}/${postId}`;
  return request.get<ResponsePosts.GetById>(url);
};

export const getAllPosts = (bis: string) => {
  const url = `${baseURL}?post=${bis}`;
  return request.get<ResponsePosts.Get>(url);
};
