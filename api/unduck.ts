import request from './core';

const baseURL = '/unduck';

export const postUnduck = (data: RequestUnduck.Post) => {
  const url = `${baseURL}`;
  return request.post<ResponseUnduck.Post, RequestUnduck.Post>(url, data);
};
