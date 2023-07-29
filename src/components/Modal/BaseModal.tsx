import { css } from '@emotion/react';
import { ReactNode, useEffect } from 'react';

import { ModalType } from '@/types/modal';
import { bodyScroll } from '@/utils/scroll';

import CloseIcon from '../icons/CloseIcon';

interface BaseModalProps extends React.ComponentProps<'div'> {
  type: ModalType;
  children: ReactNode;
  onClose: ({ type }: { type: ModalType }) => void;
}

export default function BaseModal({ type, children, onClose }: BaseModalProps) {
  const handleModalClose = () => {
    onClose({ type });
  };

  useEffect(() => {
    bodyScroll.disable();
    return () => {
      bodyScroll.enable();
    };
  }, []);

  return (
    <div css={baseModalStyle}>
      <div css={modalOverlayStyle} onClick={handleModalClose} />
      <div css={modalStyle}>
        <button css={closeButtonStyle} onClick={handleModalClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}

const baseModalStyle = css`
  width: 100%;
  height: 100vh;
  z-index: 999;
`;

const modalOverlayStyle = css`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 56px;
  right: 20px;
  padding: 10px;
`;

const modalStyle = css`
  width: calc(100%);
  height: calc(100%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 56px 20px 40px 20px;
  z-index: 5;
`;
