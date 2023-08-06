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
    <div role="dialog" css={baseModalStyle}>
      <div className="modal-overlay" onClick={handleModalClose} />
      <div className="modal-container">
        <button aria-label="modal-close-btn" className="modal-close-btn" onClick={handleModalClose}>
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
  z-index: 10;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .modal-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #00000090;
  }

  .modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 5;
  }

  .modal-close-btn {
    position: absolute;
    top: 0px;
    right: 3px;
    padding: 10px;
  }
`;
