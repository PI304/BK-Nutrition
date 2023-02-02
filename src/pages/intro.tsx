import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { IntroPage } from '@/components/pages/intro/IntroPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from 'constants/seo';

export default function intro() {
  return (
    <>
      <CustomHead title={Seo.Title.intro} />
      <IntroPage />
    </>
  );
}

intro.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
