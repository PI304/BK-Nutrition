import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { BusinessPage } from '@/components/pages/business/BusinessPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from 'constants/seo';

export default function business() {
  return (
    <>
      <CustomHead title={Seo.Title.business} />
      <BusinessPage />
    </>
  );
}

business.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
