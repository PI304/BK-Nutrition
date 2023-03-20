import { MemberPage } from '@/components/pages/member/MemberPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function member() {
  return (
    <>
      <CustomHead title={Seo.Title.member} />
      <MemberPage />
    </>
  );
}

setLayout(member, WithBackgroundHeaderLayout);
