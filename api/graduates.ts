/* 지원 대학원생 */

import request from './core';

const baseURL = '/graduates';

export const getGraduates = () => {
  const url = `${baseURL}`;
  return request.get<ResponseGraduates.Get>(url);
};
