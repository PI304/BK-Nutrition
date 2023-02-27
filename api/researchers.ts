/* 신진 연구 이력 */

import request from './core';

const baseURL = '/researchers';

export const getResearchers = () => {
  const url = `${baseURL}`;
  return request.get<ResponseResearchers.Get>(url);
};

export const getResearchersById = (researcherId: number) => {
  const url = `${baseURL}/${researcherId}`;
  return request.get<ResponseResearchers.GetById>(url);
};
