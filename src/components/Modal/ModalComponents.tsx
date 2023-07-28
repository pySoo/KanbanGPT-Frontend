import { ReactElement } from 'react';

import { ModalType } from '@/types/modal';

import GPTInfoModal from './GPTInfoModal';
import IssueModal from './IssueModal';

export const MODAL_COMPONENTS: { [key in ModalType]: () => ReactElement } = {
  [ModalType.ISSUE]: IssueModal,
  [ModalType.GPT_INFO]: GPTInfoModal,
};
