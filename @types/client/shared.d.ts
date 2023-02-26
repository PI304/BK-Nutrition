/**
 * Shared
 */

/* BackgroundHeader */
type TitleProps = {
  title: string;
  sub_title?: string;
  address: string;
};

/* Pagination */

type PageButtonProps = {
  currentPage: number;
  totalPosts: number | undefined;
  size: number | undefined;
  onChangePage: (page: number) => void;
};

type NumberButtonProps = IsCurrentType & {};

/* Download */
type DownloadProps = {
  year: string;
  semester: string;
};

/* Carousel */
type IndicatorProps = IsCurrentType & {};

type CarouselWrapperProps = {
  itemIdx: number;
};

/* MainContact */
type MainContactProps = {
  page?: string;
  title?: string;
};
