import { css } from '@emotion/react';

import { useModal } from '@/hooks/useModal';
import { ModalType } from '@/types/modal';

export default function ConnectToGptInfo() {
  const { modalList, openModal, clearModal } = useModal();
  const isSettingPage = modalList.filter((modal) => modal.type === ModalType.GPT_INFO).length;

  const handleClick = () => {
    if (isSettingPage) return;
    if (modalList.length > 0) clearModal();

    openModal({ type: ModalType.GPT_INFO });
  };

  return (
    <div css={connectToGptInfoStyle}>
      <p>유효하지 않은 API key예요</p>
      {!isSettingPage && <button onClick={handleClick}>API 세팅 확인하러 가기</button>}
    </div>
  );
}

const connectToGptInfoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  button {
    padding: 5px 10px;
    background: white;
    border-radius: 6px;
    font-weight: 500;
  }
`;
