/**
 * Shared
 */

type TitleProps = {
  title: string;
  address: string;
};

type PageButtonProps = {
  currentPage: number;
  totalPosts: number | undefined;
  size: number | undefined;
  onChangePage: (page: number) => void;
};

type NumberButtonProps = IsCurrentType & {};
