import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { AchievementViewPage } from '@/components/pages/achievement';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { ViewLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';
import { useRouter } from 'next/router';

export default function achievementView() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <AchievementViewPage />
    </>
  );
}

achievementView.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='사업성과' address='연구업적' />
      <ViewLayout>{page}</ViewLayout>
    </DefaultLayout>
  );
};
