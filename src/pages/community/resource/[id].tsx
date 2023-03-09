import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';
import { useRouter } from 'next/router';
import View from '@/components/shared/View';
import { Paths } from '@/constants';

export default function view() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <CustomHead title={Seo.Title.resource} />
      <View id={+(id || 0)} boardPath={Paths.resource} />
    </>
  );
}

view.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader nametitle='자료실' title='커뮤니티' subtitle='자료실' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
