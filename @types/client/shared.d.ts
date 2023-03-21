/**
 * Shared
 */

/* BackgroundHeader */
type TitleProps = {
  nametitle?: string;
  title?: string;
  subtitle?: string;
};

/* Pagination */

type PageButtonProps = {
  currentPage: number;
  totalPosts: number | undefined;
  size: number | undefined;
  onChangePage: (page: number) => void;
};

type NumberButtonProps = IsCurrentType & {};

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

type ViewProps = {
  id: number;
  boardPath: string;
};

/* Header */
type isHoverType = {
  isHover: boolean;
};

type HeaderProps = {
  onClickTrue: () => void;
};

type MobileSideBarProps = {
  onClickFalse: () => void;
};

/* Map */
interface WindowType {
  kakao: any;
}
