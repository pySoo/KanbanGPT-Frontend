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
  height: 100%;
  z-index: 999;
  overflow: scroll;
`;

const modalOverlayStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #00000090;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;

const modalStyle = css`
  width: calc(100% - 80px);
  height: calc(100% - 120px);
  position: absolute;
  top: 0;
  left: 0;
  margin: 40px;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
`;
