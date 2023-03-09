import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { NoticePage } from '@/components/pages/notice/NoticePage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function notice() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <NoticePage />
    </>
  );
}

notice.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader nametitle='공지사항' title='커뮤니티' subtitle='공지사항' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
