import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { useRouter } from 'next/router';
import View from '@/components/shared/View';
import { Paths } from '@/constants';
import { setLayout } from '@/utils/setLayout';

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

setLayout(view, WithBackgroundHeaderLayout);
