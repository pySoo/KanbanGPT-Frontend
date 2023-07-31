import { css } from '@emotion/react';

import { useModal } from '@/hooks/useModal';
import { theme, ThemeType } from '@/styles/theme';
import { ModalType } from '@/types/modal';

export default function ConnectToGptModal() {
  const { modalList, openModal, clearModal } = useModal();
  const isSettingPage = modalList.filter((modal) => modal.type === ModalType.GPT_INFO).length;

  const handleClick = () => {
    if (isSettingPage) return;
    if (modalList.length > 0) clearModal();

    openModal({ type: ModalType.GPT_INFO });
  };

  return (
    <div css={connectToGptInfoStyle(theme)}>
      <p>유효하지 않은 API Key예요.</p>
      {!isSettingPage && (
        <button aria-label="navigate-to-modal" onClick={handleClick}>
          API Key 확인하기
        </button>
      )}
    </div>
  );
}

const connectToGptInfoStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 5px 10px;
    background: white;
    border-radius: 8px;
    font-weight: 500;
    color: ${theme.colors.midGray};
  }
`;
