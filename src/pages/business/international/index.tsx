import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { InternationalPage } from '@/components/pages/international';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function international() {
  return (
    <>
      <CustomHead title={Seo.Title.international} />
      <InternationalPage />
    </>
  );
}

international.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader nametitle='국제협력' title='사업성과' subtitle='국제협력' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
