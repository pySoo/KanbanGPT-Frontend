import DashBoardIcon from '@/components/icons/DashBoardIcon';

import { path } from './path';

export const navConfig = [
  {
    icon: DashBoardIcon(),
    label: 'Dashboard',
    path: path.root,
  },
  {
    icon: DashBoardIcon(),
    label: 'Saved Codes',
    path: path.savedCodes,
  },
  {
    icon: DashBoardIcon(),
    label: 'ChatGPT',
    path: path.chatGpt,
  },
];
