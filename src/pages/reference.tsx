import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { ReferencePage } from '@/components/pages/reference/ReferencePage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from 'constants/seo';

export default function reference() {
  return (
    <>
      <CustomHead title={Seo.Title.reference} />
      <ReferencePage />
    </>
  );
}

reference.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
