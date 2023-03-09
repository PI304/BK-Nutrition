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
      <BackgroundHeader nametitle='연구업적' title='사업성과' subtitle='연구업적' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
