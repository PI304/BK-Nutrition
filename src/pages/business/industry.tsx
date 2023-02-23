import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { IndustryPage } from '@/components/pages/industry';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function industry() {
  return (
    <>
      <CustomHead title={Seo.Title.industry} />
      <IndustryPage />
    </>
  );
}

industry.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='Industry' sub_title='' address='Industry' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
