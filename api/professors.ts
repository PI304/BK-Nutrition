/* 참여교수 */

import request from './core';

const baseURL = '/professors';

export const getProfessors = () => {
  const url = `${baseURL}`;
  return request.get<ResponseProfessors.Get>(url);
};

export const getProfessorsById = (professorId: number) => {
  const url = `${baseURL}/${professorId}`;
  return request.get<ResponseProfessors.GetById>(url);
};
