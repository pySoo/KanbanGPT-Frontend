import { useRecoilState } from 'recoil';

import { modalAtom } from '@/atoms/modalAtom';
import { ModalStateType } from '@/types/modal';

export function useModal() {
  const [modalList, setModalList] = useRecoilState<ModalStateType[]>(modalAtom);

  const openModal = ({ type, props }: ModalStateType) => {
    setModalList((modals) => {
      return [...modals, { type, props }];
    });
  };

  const closeModal = ({ type }: ModalStateType) => {
    setModalList((modals) => {
      return modals.filter((modal) => modal.type !== type);
    });
  };

  return { modalList, openModal, closeModal };
}
