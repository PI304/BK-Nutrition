import { IntroPage } from '@/components/pages/intro/IntroPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function intro() {
  return (
    <>
      <CustomHead title={Seo.Title.intro} />
      <IntroPage />
    </>
  );
}

setLayout(intro, WithBackgroundHeaderLayout);
