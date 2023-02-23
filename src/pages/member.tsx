import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { MemberPage } from '@/components/pages/member/MemberPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { MemberLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';

export default function member() {
  return (
    <>
      <CustomHead title={Seo.Title.member} />
      <MemberPage />
    </>
  );
}

member.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader title='Member' sub_title='' address='Member' />
      <MemberLayout>{page}</MemberLayout>
    </DefaultLayout>
  );
};
