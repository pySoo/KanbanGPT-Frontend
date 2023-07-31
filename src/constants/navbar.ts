import CodeIcon from '@/components/icons/CodeIcon';
import DashBoardIcon from '@/components/icons/DashBoardIcon';

import { path } from './path';

export const navConfig = [
  {
    icon: DashBoardIcon({ size: 20 }),
    label: 'Dashboard',
    path: path.root,
  },
  {
    icon: CodeIcon({ size: 20 }),
    label: 'Saved Codes',
    path: path.codeArchive,
  },
];
