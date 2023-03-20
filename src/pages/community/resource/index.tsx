import { ResourcePage } from '@/components/pages/resource';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function resource() {
  return (
    <>
      <CustomHead title={Seo.Title.resource} />
      <ResourcePage />
    </>
  );
}

setLayout(resource, WithBackgroundHeaderLayout);
