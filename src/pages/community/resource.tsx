import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { ResourcePage } from '@/components/pages/resource';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function resource() {
  return (
    <>
      <CustomHead title={Seo.Title.resource} />
      <ResourcePage />
    </>
  );
}

resource.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='Community' address='Resource' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
