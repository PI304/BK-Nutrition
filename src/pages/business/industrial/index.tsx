import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { IndustrialPage } from '@/components/pages/industrial';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function industrial() {
  return (
    <>
      <CustomHead title={Seo.Title.industrial} />
      <IndustrialPage />
    </>
  );
}

industrial.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader nametitle='산학협력' title='사업성과' subtitle='산학협력' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
