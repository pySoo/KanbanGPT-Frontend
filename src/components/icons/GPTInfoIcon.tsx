import { css } from '@emotion/react';
import { BsInfoCircleFill } from 'react-icons/bs';

import { useModal } from '@/hooks/useModal';
import { theme, ThemeType } from '@/styles/theme';
import { ModalType } from '@/types/modal';

import HoverIcon from '../common/HoverIcon';

export default function GPTInfoIcon() {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal({ type: ModalType.GPT_INFO });
  };

  return (
    <div css={gptInfoStyle(theme)} onClick={handleClick}>
      <HoverIcon icon={<BsInfoCircleFill size={20} />} className="info-icon" />
      <span className="info-title">GPT API 연동하기</span>
    </div>
  );
}

const gptInfoStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  .info-icon {
    color: ${theme.colors.primary};
  }

  .info-title {
    padding-top: 2px;
  }
`;
