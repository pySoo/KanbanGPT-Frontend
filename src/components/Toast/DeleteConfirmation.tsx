import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import deleteStateAtom from '@/atoms/deleteStateAtom';
import { theme, ThemeType } from '@/styles/theme';

type DeleteConfirmationProps = {
  id: string;
};

export default function DeleteConfirmation({ id }: DeleteConfirmationProps) {
  const setDelete = useSetRecoilState(deleteStateAtom(id));

  const handleClick = () => {
    setDelete(true);
  };

  return (
    <div css={deleteConfirmationStyle(theme)}>
      <p>정말 삭제하시겠어요?</p>
      <button onClick={handleClick}>삭제하기</button>
    </div>
  );
}

const deleteConfirmationStyle = (theme: ThemeType) => css`
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
