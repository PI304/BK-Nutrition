import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { ResourceViewPage } from '@/components/pages/resource';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { ViewLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';
import { useRouter } from 'next/router';

export default function resourceView() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <ResourceViewPage />
    </>
  );
}

resourceView.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='커뮤니티' address='자료실' />
      <ViewLayout>{page}</ViewLayout>
    </DefaultLayout>
  );
};
