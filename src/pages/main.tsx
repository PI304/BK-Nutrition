import { MainPage } from '@/components/pages/main/MainPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { MainLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.main} />
      <MainPage />
    </>
  );
}

setLayout(main, MainLayout);
