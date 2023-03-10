import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { IntroPage } from '@/components/pages/intro/IntroPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { IntroLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function intro() {
  return (
    <>
      <CustomHead title={Seo.Title.intro} />
      <IntroPage />
    </>
  );
}

intro.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader nametitle='교육팀 소개' title='교육팀 소개' subtitle='' />
      <IntroLayout>{page}</IntroLayout>
    </DefaultLayout>
  );
};
