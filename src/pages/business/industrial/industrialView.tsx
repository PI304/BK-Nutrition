import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { IndustrialViewPage } from '@/components/pages/industrial';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { ViewLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function industrialView() {
  return (
    <>
      <CustomHead title={Seo.Title.industrial} />
      <IndustrialViewPage />
    </>
  );
}

industrialView.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='사업성과' address='국제협력' />
      <ViewLayout>{page}</ViewLayout>
    </DefaultLayout>
  );
};
