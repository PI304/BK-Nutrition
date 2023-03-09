import { ReactElement } from 'react';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { SharedLayout } from '@/components/layouts';
import { BackgroundHeader } from '@/components/shared';
import { useRouter } from 'next/router';
import View from '../../../components/shared/View';
import { Paths } from '../../../constants/paths';

export default function view() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <CustomHead title={Seo.Title.industrial} />
      <View id={+(id || 0)} boardPath={Paths.industrial} />
    </>
  );
}

view.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <BackgroundHeader nametitle='산학협력' title='사업성과' subtitle='산학협력' />
      <SharedLayout>{page}</SharedLayout>
    </DefaultLayout>
  );
};
