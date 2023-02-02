import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { NoticePage } from '@/components/pages/notice/NoticePage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from 'constants/seo';

export default function notice() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <NoticePage />
    </>
  );
}

notice.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
