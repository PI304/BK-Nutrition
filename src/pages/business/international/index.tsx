import { InternationalPage } from '@/components/pages/international';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function international() {
  return (
    <>
      <CustomHead title={Seo.Title.international} />
      <InternationalPage />
    </>
  );
}

setLayout(international, WithBackgroundHeaderLayout);
