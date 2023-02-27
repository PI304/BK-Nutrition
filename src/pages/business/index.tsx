import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { AchievementPage } from '@/components/pages/achievement/AchievementPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function achievement() {
  return (
    <>
      <CustomHead title={Seo.Title.achievement} />
      <AchievementPage />
    </>
  );
}

achievement.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='Business' address='Achievement' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
