import { IndustrialPage } from '@/components/pages/industrial';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function industrial() {
  return (
    <>
      <CustomHead title={Seo.Title.industrial} />
      <IndustrialPage />
    </>
  );
}

setLayout(industrial, WithBackgroundHeaderLayout);
