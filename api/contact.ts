/* footer */

import request from './core';

const baseURL = '/contact';

export const getContact = () => {
  const url = `${baseURL}`;
  return request.get<ResponseContact.Get>(url);
};
