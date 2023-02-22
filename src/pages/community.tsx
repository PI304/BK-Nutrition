import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { CommunityPage } from '@/components/pages/community/CommunityPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from 'constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function community() {
  return (
    <>
      <CustomHead title={Seo.Title.community} />
      <CommunityPage />
    </>
  );
}

community.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='Community' address='Community' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
