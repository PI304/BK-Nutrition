import { type } from 'os';
import { ReactElement } from 'react';
import notice from '../../pages/notice/index';
import resource from '../../pages/resource/index';

/**
 * Types that need some dependancies
 */

/**
 * @for ResourceViewPage
 * @for NoticeViewPage
 * @by pages/adds/resource/[id].tsx
 * @by pages/adds/notice/[id].tsx*/
type ViewPageProps = {
  id: number;
};
