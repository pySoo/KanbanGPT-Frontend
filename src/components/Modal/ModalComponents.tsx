import { ReactElement } from 'react';

import { ModalType } from '@/types/modal';

import IssueModal from './IssueModal';

export const MODAL_COMPONENTS: { [key in ModalType]: () => ReactElement } = {
  [ModalType.ISSUE]: IssueModal,
};
