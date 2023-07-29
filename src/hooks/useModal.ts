import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { modalAtom } from '@/atoms/modalAtom';
import { ModalStateType } from '@/types/modal';

export function useModal() {
  const [modalList, setModalList] = useRecoilState<ModalStateType[]>(modalAtom);

  const location = useLocation();
  const navigate = useNavigate();

  const openModal = ({ type, props }: ModalStateType) => {
    setModalList((modals) => {
      return [...modals, { type, props }];
    });
  };

  const closeModal = ({ type }: ModalStateType) => {
    setModalList((modals) => {
      return modals.filter((modal) => modal.type !== type);
    });
    removeParams();
  };

  const clearModal = () => {
    setModalList([]);
  };

  const removeParams = () => {
    navigate(location.pathname);
  };

  return { modalList, openModal, closeModal, clearModal };
}
