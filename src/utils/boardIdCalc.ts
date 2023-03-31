import { PageLimit } from '@/constants';

export const boardIdCalc = (count: number, page: number, idx: number) => {
  return (Math.ceil(count / PageLimit.limit) - page) * PageLimit.limit + count - idx;
};
