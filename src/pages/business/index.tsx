import { AchievementPage } from '@/components/pages/achievement/AchievementPage';
import { CustomHead } from '@/components/seo/CustomHead';
import { Seo } from '@/constants/seo';
import { WithBackgroundHeaderLayout } from '@/components/layouts';
import { setLayout } from '@/utils/setLayout';

export default function achievement() {
  return (
    <>
      <CustomHead title={Seo.Title.achievement} />
      <AchievementPage />
    </>
  );
}

setLayout(achievement, WithBackgroundHeaderLayout);
