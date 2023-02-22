import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { IntroPage } from '@/components/pages/intro/IntroPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from 'constants/seo';
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
      <BackgroundHeader title='Intro' sub_title='intro' address='Intro' />
      <IntroLayout>{page}</IntroLayout>
    </DefaultLayout>
  );
};
