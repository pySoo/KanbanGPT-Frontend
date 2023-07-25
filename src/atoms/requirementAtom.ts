import { atom } from 'recoil';

import { requirementData } from '@/data/requirement';
import { RequirementStateType } from '@/types/requirement';

export const requirementAtom = atom<RequirementStateType[]>({
  key: 'requirementState',
  default: requirementData,
});
