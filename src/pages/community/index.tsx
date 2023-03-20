import { NoticePage } from '@/components/pages/notice/NoticePage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function notice() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <NoticePage />
    </>
  );
}

setLayout(notice, WithBackgroundHeaderLayout);
