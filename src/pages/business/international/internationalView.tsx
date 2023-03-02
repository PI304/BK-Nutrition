import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { InternationalViewPage } from '@/components/pages/international';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { ViewLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function internationalView() {
  return (
    <>
      <CustomHead title={Seo.Title.international} />
      <InternationalViewPage />
    </>
  );
}

internationalView.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='사업성과' address='산학협력' />
      <ViewLayout>{page}</ViewLayout>
    </DefaultLayout>
  );
};
