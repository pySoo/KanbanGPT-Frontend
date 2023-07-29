import { css } from '@emotion/react';
import { BsInfoCircleFill } from 'react-icons/bs';

import { useModal } from '@/hooks/useModal';
import { ModalType } from '@/types/modal';

export default function GPTInfoIcon() {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal({ type: ModalType.GPT_INFO });
  };

  return (
    <div css={gptInfoStyle} onClick={handleClick}>
      <BsInfoCircleFill size={20} />
      <span css={statusStyle}>{'GPT API 연동하기'}</span>
    </div>
  );
}

const gptInfoStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const statusStyle = css`
  padding-top: 0px;
`;
