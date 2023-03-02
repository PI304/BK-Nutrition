import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { NoticeViewPage } from '@/components/pages/notice';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { ViewLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';
import { useRouter } from 'next/router';

export default function noticeView() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <NoticeViewPage />
    </>
  );
}

noticeView.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='커뮤니티' address='공지사항' />
      <ViewLayout>{page}</ViewLayout>
    </DefaultLayout>
  );
};
